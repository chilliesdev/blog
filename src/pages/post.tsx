import React from 'react'

import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import PostDetail from '../components/PostDetail'
import PostTitle from '../styles/PostTitle'
import PostCategory from '../styles/PostCategory'
import PostImage from '../styles/PostImage'
import PostBody from '../styles/PostBody'

const Post: React.FC = () => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <PostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </PostTitle>
          <PostCategory>Category</PostCategory>
          <PostDetail />
          <PostImage src="https://picsum.photos/200" />
          <PostBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Netus et malesuada fames ac turpis egestas integer eget aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc.
            Purus ut faucibus pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Amet
            porttitor eget dolor morbi non arcu risus quis varius. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames. Leo integer malesuada nunc vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida
            hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.
            Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Nulla facilisi cras fermentum odio. Amet aliquam id
            diam maecenas ultricies mi. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Dui vivamus arcu felis bibendum ut
            tristique et egestas quis. Massa vitae tortor condimentum lacinia quis. Sed felis eget velit aliquet. Sed blandit libero
            volutpat sed cras ornare. Pharetra pharetra massa massa ultricies mi quis hendrerit. Tristique risus nec feugiat in fermentum
            posuere urna. Tempor nec feugiat nisl pretium fusce id velit. Sed arcu non odio euismod lacinia at quis risus. Venenatis lectus
            magna fringilla urna porttitor rhoncus dolor purus non. Suspendisse in est ante in nibh mauris cursus mattis molestie. Vulputate
            dignissim suspendisse in est ante in nibh mauris cursus. Elementum facilisis leo vel fringilla est ullamcorper eget. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nec dui nunc mattis enim ut tellus elementum sagittis. Ut eu sem
            integer vitae justo eget magna fermentum. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Suspendisse in est
            ante in nibh mauris cursus mattis. Nisi lacus sed viverra tellus in hac habitasse. Bibendum arcu vitae elementum curabitur
            vitae. Vitae purus faucibus ornare suspendisse sed nisi lacus. Condimentum vitae sapien pellentesque habitant morbi tristique.
            Facilisis gravida neque convallis a. Est placerat in egestas erat imperdiet. Rhoncus dolor purus non enim. Vel quam elementum
            pulvinar etiam non quam lacus suspendisse. Pharetra pharetra massa massa ultricies mi quis. Venenatis lectus magna fringilla
            urna porttitor rhoncus dolor. Gravida dictum fusce ut placerat orci nulla pellentesque.
          </PostBody>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Post
