import React from 'react'

import StyledPostList from '../styles/StyledPostList'
import PostCategory from '../styles/PostCategory'
import PostTitle from '../styles/PostTitle'
import PostPreview from '../styles/PostPreview'
import ReadmoreLink from '../styles/ReadmoreLink'
import PostLine from '../styles/PostLine'
import PostDetail from './PostDetail'
import PostText from '../styles/PostText'
import PostImage from '../styles/PostImage'
import PostImageWrapper from '../styles/PostImageWrapper'
import PostImageCaption from '../styles/PostImageCaption'

interface PostListProps {
  title: string
  preview: string
  slug: string
  image: string
}

const PostList: React.FC<PostListProps> = ({ title, preview, slug, image }) => {
  return (
    <StyledPostList>
      <PostCategory>Category</PostCategory>
      <PostTitle>{title}</PostTitle>
      <PostPreview>{preview}</PostPreview>
      <ReadmoreLink to={`/${slug}`}>Read More</ReadmoreLink>
      <PostLine />
      <PostDetail />
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
