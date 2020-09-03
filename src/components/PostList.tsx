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

const PostList: React.FC = () => {
  return (
    <StyledPostList>
      <PostText>
        <PostCategory>Category</PostCategory>
        <PostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </PostTitle>
        <PostPreview>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PostPreview>
        <ReadmoreLink to="/post">Read More</ReadmoreLink>
        <PostLine />
        <PostDetail />
      </PostText>
      <PostImage src="https://picsum.photos/200" />
    </StyledPostList>
  )
}

export default PostList
