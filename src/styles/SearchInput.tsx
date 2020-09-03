import styled from '@emotion/styled'
import { breakpoints } from './defaults/variables'

interface StyleProps {
  open: boolean
}

export default styled.input`
  border: none;
  border-radius: 4px;
  height: 2.5rem;
  min-width: 24rem;
  margin-right: -19px;
  transition: all ease-in-out 500ms;

  &::placeholder {
    padding-left: 1rem;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    margin-right: 0;

    ${(props: StyleProps) =>
      !props.open
        ? `
      opacity: 0;
      min-width: 0;
      width: 0;
    `
        : `
      opacity: 1;
      min-width: 15rem;
      width: 15rem;
    `}
  }
`
