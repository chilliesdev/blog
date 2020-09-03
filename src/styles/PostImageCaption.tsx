import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.div`
  position: absolute;
  bottom: 13rem;
  display: none;

  @media screen and (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`
