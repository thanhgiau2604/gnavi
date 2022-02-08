import styled from 'styled-components'
import { Variables } from '../app/Variables'

interface ContainerProps {
  width?: number | string
  height?: number | string
  padding?: string
  backgroundColor?: string
}

const setValue = (param: number | string): string => {
  if (typeof param === 'string') {
    // width | height
    return param
  }
  // width | height
  return `calc(${param}rem / 10)`
}

const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width && setValue(width)};
  height: ${({ height }) => height && setValue(height)};
  overflow: auto;
  padding: ${({ padding }) => padding && padding};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`

Container.defaultProps = {
  padding: '0 2.7rem',
  backgroundColor: Variables.colorWhite,
}

export { Container }
