import { dimensions, colors } from './variables'

export const getEmSize = (size: number) => size / dimensions.fontSize.regular

export const setCaption = (caption: boolean | undefined) => {
  return caption
    ? `
    display: block;
    color: ${colors.white};
    padding: 0 1rem;
  `
    : `
    display: none;
  `
}
