import styled from '@emotion/styled'
import { colors, breakpoints } from './defaults/variables'

export default styled.div`
  color: ${colors.white};
  opacity: 0.5;

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-row: 3/3;
  }
`
