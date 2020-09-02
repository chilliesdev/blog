import * as React from 'react'

import SearchBar from './SearchBar'

import StyledHeader from '../styles/StyledHeader'
import HomepageLink from '../styles/HomepageLink'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HomepageLink to="/">{title}</HomepageLink>
    <SearchBar />
  </StyledHeader>
)

export default Header
