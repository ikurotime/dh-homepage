import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My first Portfolio">
    <Container>
      <Title>
        Portfolio <Badge>2020</Badge>
      </Title>
      <P>
        The very first portfolio I made when I learned javascript. Vanilla Javascript, HTML and CSS.
        This is the web I created for myself when I learned Node.js. It is deployed on heroku.
        I loved the final result.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://davidhuertas.herokuapp.com">
          davidhuertas.herokuapp.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,Javascript, NodeJS, Heroku</span>
        </ListItem>
      </List>
    <WorkImage src="/images/works/firstPortfolio.jpg" alt="portfolio" />
      <WorkImage src="/images/works/firstBio.jpg" alt="portfolio" />
      <WorkImage src="/images/works/firstProjects.jpg" alt="portfolio" />
      <WorkImage src="/images/works/firstContact.jpg" alt="portfolio" />
    
     
    </Container>
  </Layout>
)

export default Work