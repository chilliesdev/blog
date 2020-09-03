import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* justify-content: space-between; */

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`
