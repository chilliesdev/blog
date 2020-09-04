import React from 'react'

import StyledPostList from '../styles/StyledPostList'
import PostCategory from '../styles/PostCategory'
import PostTitle from '../styles/PostTitle'
import PostPreview from '../styles/PostPreview'
import ReadmoreLink from '../styles/ReadmoreLink'
import PostLine from '../styles/PostLine'
import PostDetail from './PostDetail'
import PostImage from '../styles/PostImage'
import PostImageWrapper from '../styles/PostImageWrapper'
import PostImageCaption from '../styles/PostImageCaption'

interface PostListProps {
  title: string
  preview: React.ReactNode
  slug: string
  image: string
  category: string
  details: {
    readTime: string
    publishedDate: string
  }
}

const PostList: React.FC<PostListProps> = ({ title, preview, slug, image, category, details: { readTime, publishedDate } }) => {
  return (
    <StyledPostList>
      <PostCategory>{category}</PostCategory>
      <PostTitle>{title}</PostTitle>
      <PostPreview>{preview}</PostPreview>
      <ReadmoreLink to={`/${slug}`}>Read More</ReadmoreLink>
      <PostLine />
      <PostDetail readTime={readTime} publishDate={publishedDate} />
      <PostImageWrapper>
        <PostImage src={image} />
        <PostImageCaption>
          <PostCategory caption>Category</PostCategory>
          <PostTitle caption>{title}</PostTitle>
        </PostImageCaption>
      </PostImageWrapper>
    </StyledPostList>
  )
}

export default PostList
