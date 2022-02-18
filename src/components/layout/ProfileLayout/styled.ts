import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

export const ProfileLayoutStyled = styled.div`
  margin-top: 2rem;

  div {
    margin-bottom: 1rem;
  }

  .gr-guide {
    margin-left: -30px;
  }

  .guide {
    font-size: ${FONT_SIZES.medium};
    font-weight: ${Variables.fontWeightBold};
    margin-bottom: 6px;
  }

  .correspondence-area {
    &-value {
      font-size: ${FONT_SIZES.small};
      font-weight: ${Variables.fontWeightBold};
    }
  }

  .gr-btn-language {
    margin-top: 1rem;
  }

  .avatar {
    position: relative;
  }

  img {
    position: absolute;
    z-index: 2;
    inset: auto auto 7px 73px;
  }

  .btn-edit-form {
    max-width: 16rem;
  }

  .main-name {
    font-weight: ${Variables.fontWeightBold};
    font-size: ${FONT_SIZES.xlarge};
  }

  .sub-name {
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

  .value-rating,
  .value-follower {
    font-weight: ${Variables.fontWeightBold};
  }

  .text-value {
    color: ${Variables.colorPrimary};
  }
`
