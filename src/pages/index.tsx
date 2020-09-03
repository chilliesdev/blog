import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PostList from '../components/PostList'
import image from './img.jpg'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <PostList
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
          slug="post"
          image={image}
        />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
