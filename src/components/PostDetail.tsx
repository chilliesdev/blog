import React from 'react'

import { BiTimer } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'

import StyledPostDetail from '../styles/StyledPostDetail'
import PostDetailIcon from '../styles/PostDetailIcon'
import PostDetailWrapper from '../styles/PostDetailWrapper'

const PostDetails: React.FC<{ icon: React.ReactNode }> = ({ icon, children }) => (
  <StyledPostDetail>
    <PostDetailIcon>{icon}</PostDetailIcon>
    {children}
  </StyledPostDetail>
)

const Details: React.FC = () => {
  const details: { icon: React.ReactNode; text: string }[] = [
    { icon: <BiTimer />, text: '3mins read' },
    { icon: <MdDateRange />, text: '5days ago' }
  ]

  return (
    <PostDetailWrapper>
      {details.map(({ icon, text }) => (
        <PostDetails icon={icon} key={text}>
          {text}
        </PostDetails>
      ))}
    </PostDetailWrapper>
  )
}

export default Details
