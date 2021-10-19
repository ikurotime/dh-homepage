import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My previous Portfolio">
    <Container>
      <Title>
        Previous Portfolio <Badge>2021</Badge>
      </Title>
      <P>
        When I learned React I got amazed by it, and of course, I wanted to remake my portfolio with my new knowledge.
        I decided to use Firebase as a way to store and create new projects easily without editing the web itself, it was a good idea but I did't populate the projects that much.
        I quickly adquired new knowledge.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://old.davidhuertas.dev">
          old.davidhuertas.dev" <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firestore, Firebase Hosting </span>
        </ListItem>
      </List>
    <WorkImage src="/images/works/previousPortfolio.jpg" alt="old-portfolio" />
    <WorkImage src="/images/works/previousExp.jpg" alt="old-portfolio" />
    </Container>
  </Layout>
)

export default Work