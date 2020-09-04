import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import PostDetail from '../components/PostDetail'
import PostTitle from '../styles/PostTitle'
import PostCategory from '../styles/PostCategory'
import PostImage from '../styles/PostImage'
import PostBody from '../styles/PostBody'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      category
      body {
        json
      }
    }
  }
`

const Post: React.FC = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        const alt: string = node.data.target.fields.title['en-US']
        const src: string = node.data.target.fields.file['en-US'].url
        return <PostImage alt={alt} src={src} />
      }
    }
  }

  return (
    data && (
      <IndexLayout>
        <Page>
          <Container>
            <PostTitle fromPost>{data.contentfulBlogPost.title}</PostTitle>
            <PostCategory fromPost>{data.contentfulBlogPost.category}</PostCategory>
            <PostDetail fromPost publishDate={data.contentfulBlogPost.publishedDate} readTime="5 minutes read" />
            <PostBody>{documentToReactComponents(data.contentfulBlogPost.body.json, options)}</PostBody>
          </Container>
        </Page>
      </IndexLayout>
    )
  )
}

export default Post
