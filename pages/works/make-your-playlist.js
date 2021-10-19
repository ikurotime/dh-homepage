import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Discord Bot">
    <Container>
      <Title>
        Make Your Playlist <Badge>2020</Badge>
      </Title>
      <P>
      The first web I made using the Spotify API. It creates the top 10/25/100 song of the day selected.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="playlist.davidhuertas.dev">
          playlist.davidhuertas.dev <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/MKPImage.jpg" alt="DiscordBot" />
      <WorkImage src="/images/works/PHMenu.jpg" alt="DiscordBot" />
    </Container>
  </Layout>
)

export default Work