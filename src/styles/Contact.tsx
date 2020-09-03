import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

export default styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;

  @media screen and (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`
