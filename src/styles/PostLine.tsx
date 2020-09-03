import styled from '@emotion/styled'
import { colors, breakpoints } from './defaults/variables'

export default styled.div`
  background-color: ${colors.accent};
  width: 100%;
  height: 1px;
  margin-top: 1rem;

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 92%;
    justify-self: center;
  }
`
