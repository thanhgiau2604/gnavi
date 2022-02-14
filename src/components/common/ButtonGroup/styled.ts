import styled, { css } from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface props {
  rowTop?: boolean

  active?: boolean
}

export const ButtonGroupStyledContainer = styled.table<props>`
  border-collapse: collapse;
  width: 100%;
  td {
    padding: 0;
    ${({ rowTop }) => rowTop === false && `border-top: none !important`};
  }
`

export const ButtonGroupStyledItem = styled.td<props>`
  border: 1px solid ${Variables.color3};
  text-align: center;
  color: ${Variables.colorPrimary};
  cursor: pointer;
  width: 1px;

  .text {
    padding: 6px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${Variables.color6};
      color: ${Variables.colorBlack};
      font-weight: ${Variables.fontWeightBold};
    `};
`
