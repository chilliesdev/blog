import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

interface StyleProps {
  fromPost?: boolean
}

export default styled.div<StyleProps>`
  margin-top: 1rem;

  @media screen and (max-width: ${breakpoints.sm}px) {
    padding: 0 1rem;

    ${({ fromPost }) =>
      fromPost &&
      `
      padding-left: 0;
    `}
  }
`
