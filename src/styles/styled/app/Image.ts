import styled from 'styled-components'

interface ImageProps {
  width: number
  height: number
}

const ImageContainer = styled.div<ImageProps>`
  position: relative;
  width: ${({ width }) => width && `calc( (${width}rem / 10) )`};
  height: ${({ height }) => height && `calc( (${height}rem / 10) )`};
`

export { ImageContainer }
