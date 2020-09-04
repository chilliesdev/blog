import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`
