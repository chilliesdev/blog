import styled from '@emotion/styled'

import { heights, colors } from './defaults/variables'

export default styled.header`
  background-color: ${colors.brand};
  height: ${heights.header}px;

  .container {
    height: 100%;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }
`
