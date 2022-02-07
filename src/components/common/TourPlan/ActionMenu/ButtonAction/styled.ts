import styled from 'styled-components'

interface ButtonActionContainerProps {
  margin?: string
}

const ButtonActionContainer = styled.button<ButtonActionContainerProps>`
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
  border: none;
  background-color: transparent;
  height: fit-content;
`

export { ButtonActionContainer }
