import styled from '@emotion/styled'
import { colors, breakpoints } from './defaults/variables'
import { setCaption } from './defaults/mixins'

interface StyleProps {
  caption?: boolean
}

export default styled.h2<StyleProps>`
  /* text-transform: uppercase; */
  font-weight: bold;
  color: ${colors.brand};
  line-height: 50px;
  margin-top: 0;

  @media screen and (max-width: ${breakpoints.sm}px) {
    ${props => `
    font-size: 22px;
    line-height: 30px;
    ${setCaption(props.caption)}`}
  }
`
