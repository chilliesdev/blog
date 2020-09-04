import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PostList from '../components/PostList'

interface BlogPost {
  allContentfulBlogPost: {
    edges: {
      node: {
        title: string
        slug: string
        publishedDate: string
        description: string
        category: string
        thumbnail: {
          file: {
            url: string
          }
        } | null
      }
    }[]
  }
}

const IndexPage = () => {
  const blogPosts: BlogPost = useStaticQuery(graphql`
    query MyQuery {
      allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
            description
            category
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <IndexLayout>
      <Page>
        <Container>
          {blogPosts.allContentfulBlogPost.edges.map(edge => {
            const { title, slug, publishedDate, description, category, thumbnail } = edge.node

            return (
              <PostList
                title={title}
                preview={description}
                slug={slug}
                image={thumbnail ? thumbnail.file.url : 'https://picsum.photos/200'}
                category={category}
                details={{
                  publishedDate,
                  readTime: '3mins Read'
                }}
              />
            )
          })}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
