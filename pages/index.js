import { Container, Box, Heading, Image, useColorModeValue, Link, Button, SimpleGrid,List,ListItem,Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section' 
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import DiscordBot from '../public/images/works/DiscordImage.png'
import {
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'
const Page = () =>{
    return (
        <Layout>
        <Container>
            <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align='center'>
                Hello, I&apos;m a full-stack developer in Spain
            </Box>  
            <Box display={{md:'flex'}}> 
            <Box flexGrow={1}>
                <Heading as='h2' variant='page-title'>
                David Huertas
                </Heading>
                <p>A passionate young developer</p>
            </Box>       
            <Box 
            flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align='center'>
                <Image 
                borderColor='whiteAlpha.800' 
                borderWidth={2} 
                borderStyle='solid'
                maxWidth='100px' 
                display='inline-block' 
                borderRadius='full' 
                src='https://avatars.githubusercontent.com/u/77805983?s=400&u=2c960ef88fdd59c944dccd55a92333d37b2af8b2&v=4' 
                alt='Profile Image'/>
            </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    Work
                </Heading>
                <Paragraph>
                Hello, I&apos;m David, a passionate full-stack developer from Madrid, who loves to code everything he can.
                Always learning, my goal is to expand my knowlegde and grow as a developer.
                When I&apos;m not coding I like to read at my kindle and a cup of hot chocolate.
                </Paragraph>
            <Box align='center' my={4}>
                <NextLink href='/works'>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                        My work
                    </Button>
                </NextLink>
            </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                   Bio
                </Heading>
            <BioSection>
                <BioYear>2002</BioYear>
                Born in Madrid, Spain
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Associate Degree - Microinformatic Systems and Local Networks
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Associate Degree - Web Application Developer
            </BioSection>
            <BioSection>
                <BioYear>Present</BioYear>
                Working as a React Developer
            </BioSection>
            </Section>
            <Section delay={0.3}>
            <Heading as='h3' variant='section-title'>
                Things I love
            </Heading>
            <Paragraph>
                Vanilla and Cookies Ice cream, Reading, Drawing until I get mad and fighting games 
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    Social links
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/ikurotime' target='_blank'>
                            <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub}/>}>
                                @ikurotime
                            </Button>
                        </Link>
                        <Link href='https://www.linkedin.com/in/david-huertas-ortiz/' target='_blank'>
                        <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin}/>}>
                                David Huertas
                        </Button>
                        </Link>
                    </ListItem>
                </List>
                {/* <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem href='/works/discord-bot' title='Discord Bot' thumbnail={DiscordBot}/>
                </SimpleGrid> */}
            </Section>
        </Container>
        </Layout>
    )
}
export default Page