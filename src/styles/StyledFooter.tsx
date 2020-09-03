import styled from '@emotion/styled'
import { colors, heights } from './defaults/variables'

export default styled.footer`
  background-color: ${colors.brand};
  height: ${heights.footer}px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100%;
  }

  a {
    grid-column-start: span 3;
  }
`
