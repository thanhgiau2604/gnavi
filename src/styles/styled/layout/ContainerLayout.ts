import styled from 'styled-components'
import { Variables } from '../app/Variables'

interface ContainerProps {
  padding?: string
  backgroundColor?: string
}

const Container = styled.div<ContainerProps>`
  height: 100%;
  overflow: scroll;
  padding: ${({ padding }) => padding && padding};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`

Container.defaultProps = {
  padding: '0 2.7rem',
  backgroundColor: Variables.colorWhite,
}

export { Container }
