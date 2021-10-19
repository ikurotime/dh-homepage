import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Discord Bot">
    <Container>
      <Title>
        Discord Bot <Badge>2021</Badge>
      </Title>
      <P>
      I once made a Discord bot for my friends, just for fun, it is capable of playing music, fetch memes from reddit, creating watch toguether rooms and so on.
      </P>
      <P>
        We called it Gary for no reason.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=849605392027353108&permissions=8&scope=bot">
            Discord Invite Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/DiscordImage.jpg" alt="DiscordBot" />
      <WorkImage src="/images/works/BotDetail.jpg" alt="DiscordBot" />
      <WorkImage src="/images/works/watchytbot.jpg" alt="DiscordBot" />
    </Container>
  </Layout>
)

export default Work