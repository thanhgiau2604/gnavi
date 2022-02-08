import styled from 'styled-components'

interface ImageProps {
  width: number | string
  height: number | string
  margin?: string
}

const setValue = (param: string | number): string => {
  if (typeof param === 'string') {
    // width | height
    return param
  }
  // width | height
  return `calc(${param}rem / 10)`
}

const ImageContainer = styled.div<ImageProps>`
  position: relative;
  width: ${({ width }) => width && setValue(width)};
  height: ${({ height }) => height && setValue(height)};
  margin: ${({ margin }) => margin && margin};
`

export { ImageContainer }
