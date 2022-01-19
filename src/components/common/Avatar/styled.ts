import styled, { css } from 'styled-components'
import get from 'lodash/get'

interface AvatarContainerStyledProps {
  size?: 'small' | 'medium' | 'large'
  sx?: { height: number; width: number }
}

const SIZE_CONSTANTS = {
  small: 2.4,
  medium: 4.8,
  large: 9.6,
}

export const AvatarContainer = styled.div<AvatarContainerStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ size, sx }) => {
    if (!size && sx?.width && sx?.height) {
      return css`
        width: ${sx.width}px;
        height: ${sx.height}px;
      `
    }
    const sizeValue = get(SIZE_CONSTANTS, size || 'medium')
    return css`
      width: ${sizeValue}rem;
      height: ${sizeValue}rem;
    `
  }}
  border-radius: 50%;
  overflow: hidden;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  }
`
