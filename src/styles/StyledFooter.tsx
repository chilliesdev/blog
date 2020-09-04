import styled from '@emotion/styled'
import { colors, heights, breakpoints } from './defaults/variables'

export default styled.footer`
  background-color: ${colors.brand};
  height: ${heights.footer}px;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 100%;

    a {
      grid-column: 1/3;
    }
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    height: 300px;

    .container {
      padding: 0 1.5rem;

      a {
        grid-column: initial;
      }
    }
  }
`
