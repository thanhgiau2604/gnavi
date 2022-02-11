import styled, { css } from 'styled-components'
import { FlexContainerProps, FlexItemProps } from 'interfaces/FlexLayout'

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  position: ${({ position }) => position};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
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

  ${({ WRAP }) =>
    WRAP &&
    css`
      flex-wrap: wrap;
    `};

  ${({ spacing }) =>
    spacing &&
    css`
      gap: ${spacing}rem;
    `};
`

export const FlexItem = styled.div<FlexItemProps>`
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
`

export default FlexContainer
