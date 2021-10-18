import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import DiscordThumbnail from '../public/images/works/DiscordImage.png'
import MKPImage from '../public/images/works/MKPImage.png'
import Layout from '../components/layouts/article'

const Works = () =>{
   return ( 
   <Layout>
    <Container>
        <Heading as='h3' fontSize={20} mb={4}>
            Works
        </Heading>
        <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id='discord-bot' title='Discord bot' thumbnail={DiscordThumbnail}>
                I once made a Discord bot for my friends, just for fun, it is capable of playing music, fetch memes from reddit, creating watch toguether rooms and so on.
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='make-your-playlist' title='Make Your Playlist' thumbnail={MKPImage}>
                The first web I made using the Spotify API. It creates the top 10/25/100 song of the day selected.
                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Container>
    </Layout>
    )
}

export default Works