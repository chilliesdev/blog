import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.div`
  margin-top: 1rem;

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 0 1rem;
  }
`
