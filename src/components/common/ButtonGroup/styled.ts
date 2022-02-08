import styled, { css } from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface props {
  active?: boolean
}

export const ButtonGroupStyledContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const ButtonGroupStyledItem = styled.td<props>`
  border: 1px solid ${Variables.color3};
  text-align: center;
  padding: 5px;
  color: ${Variables.colorPrimary};
  cursor: pointer;
  width: 1px;

  ${({ active }) =>
    active &&
    css`
      background-color: ${Variables.color6};
      color: ${Variables.colorBlack};
      font-weight: ${Variables.fontWeightBold};
    `};
`
