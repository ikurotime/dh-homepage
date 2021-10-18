import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import dynamic from 'next/dynamic'
import Footer from '../footer'
import VoxelHello from '../voxel-hello'
import VoxelHelloLoader from '../voxel-hello-loader'

const LazyVoxelHello = dynamic(() => import('../voxel-hello'), {
    ssr: false,
    loading: () => <VoxelHelloLoader />
  })

const Main = ({children, router}) =>{

    return (
        <Box as='main' pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="David's Homepage" />
                <meta property="og:type" content="website" />
                <title>David Huertas - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <LazyVoxelHello/>
                {children}
            </Container>
            <Footer/>
        </Box>
    )
}
export default Main