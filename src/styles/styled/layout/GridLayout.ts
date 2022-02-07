import styled from 'styled-components'

interface Props {
  col?: number
  rowGap?: number
  colGap?: number
  spacing?: number
  margin?: string
}

const GridContainer = styled.div<Props>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ col }) =>
    col ? `repeat(${col}, minmax(0, 1fr))` : 'repeat(1, minmax(0, 1fr))'};
  grid-row-gap: ${({ rowGap }) => (rowGap ? `${rowGap / 16}rem` : '0')};
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap / 16}rem` : '0')};
  grid-column-gap: ${({ colGap }) => (colGap ? `${colGap / 16}rem` : '0')};
  column-gap: ${({ colGap }) => (colGap ? `${colGap / 16}rem` : '0')};
  gap: ${({ spacing }) => spacing && `${spacing}rem`};
  margin: ${({ margin }) => margin && margin};
`

export const Col = styled.div<Props>`
  grid-column: ${({ col }) => (col ? `span ${col} / span ${col}` : 'span 1 / span 1')};
`

export default GridContainer
