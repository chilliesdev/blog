import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PostList from '../components/PostList'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <PostList />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
