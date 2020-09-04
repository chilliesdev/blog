import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.div`
  position: relative;
  bottom: 20%;
  display: none;
  background: #00000050;

  @media screen and (max-width: ${breakpoints.sm}px) {
    display: block;
  }

  @media screen and (max-width: ${breakpoints.xs}px) {
    bottom: 30%;
  }
`
