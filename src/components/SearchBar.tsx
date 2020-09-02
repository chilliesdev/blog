import React from 'react'

import { BiSearch } from 'react-icons/bi'

import SearchWrapper from '../styles/SearchWrapper'
import SearchInput from '../styles/SearchInput'
import SearchIcon from '../styles/SearchIcon'

const SearchBar: React.FC = () => (
  <SearchWrapper>
    <SearchInput placeholder="Search..." />
    <SearchIcon>
      <BiSearch />
    </SearchIcon>
  </SearchWrapper>
)

export default SearchBar
