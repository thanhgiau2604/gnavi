import styled from 'styled-components'

interface ButtonReactionCotaninerProps {
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  transform?: string
  margin?: string
  padding?: string
}

const ButtonReactionContainer = styled.div<ButtonReactionCotaninerProps>`
  cursor: pointer;
  width: fit-content;
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  transform: ${({ transform }) => transform && transform};
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
`

export { ButtonReactionContainer }
