import styled from 'styled-components'

interface ButtonReactionCotaninerProps {
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  margin?: string
}

const ButtonReactionContainer = styled.div<ButtonReactionCotaninerProps>`
  cursor: pointer;
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  top: ${({ left }) => left && left};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  margin: ${({ margin }) => margin && margin};
`

export { ButtonReactionContainer }
