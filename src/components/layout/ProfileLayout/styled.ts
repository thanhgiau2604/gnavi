import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

export const ProfileLayoutStyled = styled.div`
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
    -webkit-appearance: none;
    -moz-appearance: none;
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

export const GroupButton = styled.div`
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    overflow: hidden;
    outline: none;
    color: ${Variables.colorPrimary};
  }

  .btn {
    &-1 {
      border: 1px solid ${Variables.color3};
    }
    &-2,
    &-3 {
      border-top: 1px solid ${Variables.color3};
      border-right: 1px solid ${Variables.color3};
      border-bottom: 1px solid ${Variables.color3};
    }
    &-4 {
      border-left: 1px solid ${Variables.color3};
      border-right: 1px solid ${Variables.color3};
      border-bottom: 1px solid ${Variables.color3};
    }
    &-5,
    &-6 {
      border-right: 1px solid ${Variables.color3};
      border-bottom: 1px solid ${Variables.color3};
    }
  }

  .active {
    background-color: ${Variables.color6};
    color: ${Variables.colorBlack};
  }
`
