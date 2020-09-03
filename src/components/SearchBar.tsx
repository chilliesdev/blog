import React, { useState } from 'react'

import { BiSearch } from 'react-icons/bi'

import SearchWrapper from '../styles/SearchWrapper'
import SearchInput from '../styles/SearchInput'
import SearchIcon from '../styles/SearchIcon'

const SearchBar: React.FC = () => {
  const [openSearchInput, setOpenSearchInput] = useState<boolean>(false)

  return (
    <SearchWrapper>
      <SearchInput open={openSearchInput} placeholder="Search..." />
      <SearchIcon onClick={() => setOpenSearchInput(true)}>
        <BiSearch />
      </SearchIcon>
    </SearchWrapper>
  )
}

export default SearchBar
