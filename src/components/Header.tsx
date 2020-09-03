import * as React from 'react'

import SearchBar from './SearchBar'
import Logo from './Logo'
import Container from './Container'

import StyledHeader from '../styles/StyledHeader'

const Header: React.FC = () => (
  <StyledHeader>
    <Container className="container">
      <Logo />
      <SearchBar />
    </Container>
  </StyledHeader>
)

export default Header
