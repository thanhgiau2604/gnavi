import styled, { css } from 'styled-components'

interface FlexContainerProps {
  full?: boolean
  col?: boolean
  justifyContent?: string
  alignItems?: string
  wrap?: boolean
  position?: string
  margin?: string
  padding?: string
  spacing?: number
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  position: ${({ position }) => position};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  margin: ${({ padding }) => padding};
  ${({ full }) =>
    full &&
    css`
      width: 100%;
      height: 100%;
    `};
  ${({ col }) =>
    col &&
    css`
      flex-direction: column;
    `};
  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `};

  ${({ spacing }) =>
    spacing &&
    css`
      gap: ${spacing}rem;
    `};
`

export default FlexContainer
