import styled from '@emotion/styled'
import { colors, breakpoints } from './defaults/variables'

export default styled.span`
  color: ${colors.accent};
  position: relative;
  font-size: 1.4rem;
  right: 1rem;
  top: 0.3rem;

  @media screen and (max-width: ${breakpoints.sm}px) {
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    font-size: 2rem;
  }
`
