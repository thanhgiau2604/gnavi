import styled, { css } from 'styled-components'
import { ItemGroupButtonProps } from 'interfaces/Button'
import { Variables } from 'styles/styled/app/Variables'

export const ProfileLayoutStyled = styled.div`
  margin-top: 2rem;

  div {
    margin-bottom: 1rem;
  }

  .avatar {
    position: relative;
  }

  img {
    position: absolute;
    z-index: 2;
    inset: auto auto 7px 73px;
  }

  .name-jp {
    font-weight: 700;
    font-size: 2rem;
  }

  .name-eng {
    margin-left: 1rem;
    font-size: 1.2rem;
    color: ${Variables.color5};
  }

  select {
    width: 12rem;
    margin-left: 1rem;
    padding: 6px 20px 6px 10px;
    border: 1px solid ${Variables.color3};
    border-radius: 4px;
    background: url('/icons/arrow_down_full_fill.svg') no-repeat;
    appearance: none;
    background-position: 100% 5px;
  }

  .value-rating {
  }

  .value-follower {
    font-weight: 700;
  }

  .text-value {
    color: ${Variables.colorPrimary};
  }
`

export const ButtonItemGroup = styled.button<ItemGroupButtonProps>`
  background-color: transparent;
  color: ${Variables.colorPrimary};
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  ${({ borderFull }) => borderFull && `border: 1px solid ${Variables.color3}`};
  ${({ borderTop }) => borderTop && `border-top: 1px solid ${Variables.color3}`};
  ${({ borderRight }) => borderRight && `border-right: 1px solid ${Variables.color3}`};
  ${({ borderBottom }) => borderBottom && `border-bottom: 1px solid ${Variables.color3}`};
  ${({ borderLeft }) => borderLeft && `border-left: 1px solid ${Variables.color3}`};
  ${({ active }) =>
    active &&
    css`
      background-color: ${Variables.color6};
      color: ${Variables.colorBlack};
    `}
`
