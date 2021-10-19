import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My previous Portfolio">
    <Container>
      <Title>
        Ortoalresa Custommer Satisfaction <Badge>2021</Badge>
      </Title>
      <P>
      A custommer satisfaction form I made for Ortoalresa.
      </P>
      <P>
      It's made with the MERN Stack, it has Login with custom JSON web tokens and password encryptation. You can also export the data into CSV.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, Express, React, MongoDB, Vercel </span>
        </ListItem>
      </List>
    <WorkImage src="/images/works/oa-satis-1.jpg" alt="old-portfolio" />
    <WorkImage src="/images/works/oa-satis-2.jpg" alt="old-portfolio" />
    <WorkImage src="/images/works/oa-satis-4.jpg" alt="old-portfolio" />
    <WorkImage src="/images/works/oa-satis-5.jpg" alt="old-portfolio" />
    </Container>
  </Layout>
)

export default Work