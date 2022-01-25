import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface ActionContainerProps {
  status: boolean
  transform?: string
}

const ActionContainer = styled.div<ActionContainerProps>`
  display: ${({ status }) => (status ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ transform }) => transform && transform};
  z-index: 1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: ${Variables.colorWhite};
  border: 1px solid ${Variables.color3};
  width: 14.4rem;
  height: auto;
`

export { ActionContainer }
