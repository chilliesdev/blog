import styled from '@emotion/styled'

import { heights, colors, breakpoints } from './defaults/variables'

export default styled.header`
  background-color: ${colors.brand};
  height: ${heights.header}px;

  .container {
    height: 100%;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${breakpoints.sm}px) {
      padding: 0 1.5rem;
    }
  }
`
