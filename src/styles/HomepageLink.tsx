import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors, dimensions } from './defaults/variables'

export default styled(Link)`
  color: ${colors.white};
  font-size: ${dimensions.fontSize.large}px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
