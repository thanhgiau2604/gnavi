import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface BoxContainerProps {
  status: boolean
  transform?: string
  padding?: string
  margin?: string
}

const BoxContainer = styled.div<BoxContainerProps>`
  display: ${({ status }) => (status ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ transform }) => transform && transform};
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  z-index: 1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: ${Variables.colorWhite};
  border: 1px solid ${Variables.color3};
  width: 14.4rem;
  height: auto;
`

BoxContainer.defaultProps = {
  transform: 'translate(0, 30%)',
  padding: '0',
  margin: 'auto',
}

export { BoxContainer }
