import styled from 'styled-components'

interface ButtonActionContainerProps {
  margin?: string
}

const ButtonActionContainer = styled.div<ButtonActionContainerProps>`
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
`

export { ButtonActionContainer }
