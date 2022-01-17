import styled from 'styled-components'

interface ButtonProps {
  width: number
  height: number
  color: string
  fontWeight: number
}

interface pProps {
  fontSize: string
}

const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  margin: auto;
  text-align: center;
  background-color: ${({ color }) =>
    (color === 'transparent' && 'transparent') ||
    (color === 'green' && '#59B7C5') ||
    (color === 'red' && '#FF7C8A')};
  border-radius: 4px;
  color: ${({ color }) => (color === 'transparent' ? '#59B7C5' : '#fff')};
  border: ${({ color }) =>
    ((color === 'green' || color === 'transparent') && '1px solid #2ca2ab') ||
    (color === 'red' && '1px solid #F44F6D')};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: pointer;
`

const ButtonTitle = styled.p<pProps>`
  letter-spacing: 1.5px;
  font-size: ${({ fontSize }) =>
    (fontSize === 'x-small' && '12px') || (fontSize === 'small' ? '16px' : '18px')};
`

export { ButtonContainer, ButtonTitle }
