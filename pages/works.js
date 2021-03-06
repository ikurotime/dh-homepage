import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import DiscordThumbnail from '../public/images/works/DiscordImage.jpg'
import PHMenu from '../public/images/works/PHMenu.jpg'
import firstPortfolio from '../public/images/works/firstPortfolio.jpg'
import previousPortfolio from '../public/images/works/previousPortfolio.jpg'
import oaSatis from '../public/images/works/oa-satis-1.jpg'
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
                <WorkGridItem id='old-portfolio' title='My previous portfolio' thumbnail={previousPortfolio}>
                This is the last porfolio I had. I used React and Firebase Firestore to store the projects.
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='ortoalresa-satisfaction' title='Ortoalresa Form' thumbnail={oaSatis}>
                A custommer satisfaction form I made for Ortoalresa.
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='make-your-playlist' title='Make Your Playlist' thumbnail={PHMenu}>
                The first web I made using the Spotify API. It creates the top 10/25/100 song of the day selected.
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='first-portfolio' title='My first portfolio' thumbnail={firstPortfolio}>
                The very first portfolio I made when i learned javascript. Vanilla Javascript, HTML and CSS.
                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Container>
    </Layout>
    )
}

export default Works