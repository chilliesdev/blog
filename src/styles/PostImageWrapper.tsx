import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.div`
  margin: 1rem 0;
  grid-row: 1/6;
  grid-column: 2/2;

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-row: 1/1;
    grid-column: initial;
  }
`
