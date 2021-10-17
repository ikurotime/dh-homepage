import { Container, Box,Heading } from '@chakra-ui/react'

const Page = () =>{
    return (
        <Container>
            <Box borderRadius='lg' bg="red" p={3} mb={6} align='center'>
                Hello, I&apos;m a full-stack developer in Spain
            </Box>  
            <Box display={{md:'flex'}}/> 

            <Box flexGrow={1}>
                <Heading as='h2' variant='page-title'>
                David Huertas
                </Heading>
                <p>A passionate young developer</p>
            </Box>       
        </Container>
    )
}
export default Page