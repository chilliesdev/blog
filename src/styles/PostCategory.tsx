import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'
import { setCaption } from './defaults/mixins'

interface StyleProps {
  caption?: boolean
  fromPost?: boolean
}

export default styled.p<StyleProps>`
  text-transform: uppercase;
  opacity: 0.5;
  letter-spacing: 3.75px;
  margin-bottom: 0;

  @media screen and (max-width: ${breakpoints.sm}px) {
    ${props => setCaption(props.caption)}

    display: ${({ fromPost }) => fromPost && 'block'}
  }
`
