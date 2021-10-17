import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'

const Main = ({children, router}) =>{
    return (
        <Box as='main' pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <title>David Huertas - Homepage</title>
            </Head>
            <Navbar/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}
export default Main