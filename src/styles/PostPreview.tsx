import styled from '@emotion/styled'
import { colors, breakpoints } from './defaults/variables'

export default styled.p`
  color: ${colors.brand};
  line-height: 30px;
  opacity: 0.5;
  text-overflow: ellipsis;

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 0 1rem;
  }
`
