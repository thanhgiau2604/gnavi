import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { SIZE_CONSTANTS } from 'constants/avatar'

interface AvatarContainerStyledProps {
  size?: 'small' | 'medium' | 'large'
  sx?: { height: number; width: number }
}

export const AvatarContainer = styled.div<AvatarContainerStyledProps>`
  position: relative;
  z-index: 0;
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
      width: ${sizeValue};
      height: ${sizeValue};
    `
  }}
  border-radius: 50%;
  overflow: hidden;
  user-select: none;

  img {
    text-align: center;
  }
`
