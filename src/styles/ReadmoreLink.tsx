import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, breakpoints } from './defaults/variables'

export default styled(Link)`
  text-transform: uppercase;
  color: ${colors.accent};
  letter-spacing: 3.75px;
  transition: all ease-in-out 300ms;

  &:hover {
    color: ${colors.brand};
    text-decoration: none;
    letter-spacing: 5px;
    opacity: 0.8;
    font-weight: bold;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 0 1rem;
  }
`
