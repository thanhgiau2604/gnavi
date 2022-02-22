import styled from 'styled-components'
import { FIELD_LABEL_WEIGHT, FONT_SIZES } from '@constants'
import { FieldPaddingBottom, FieldWidth, LabelWeight, TextAlign } from 'interfaces/CustomField'
import { Variables } from 'styles/styled/app/Variables'

export interface FieldStyleProps {
  width?: FieldWidth
  height?: number
  pb?: FieldPaddingBottom // padding-bottom (if null --> common value)
  lbweight?: LabelWeight
  txtAlign?: TextAlign
  showError?: boolean
}

const FieldContainer = styled.div<FieldStyleProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ pb }) => (pb !== null ? `calc( ${pb}rem / 10)` : `2.5rem`)};

  input,
  textarea,
  select {
    width: ${({ width }) => (typeof width === 'string' ? width : `calc( ${width}rem / 10)`)};
    height: ${({ height }) => `calc( ${height}rem / 10)`};
    border: ${({ showError }) =>
      showError ? `1px solid ${Variables.colorSecondary}` : `1px solid ${Variables.color3}`};
    background-color: ${Variables.colorWhite};
    padding: 1.3rem;
    color: ${Variables.colorTextCommon};
    border-radius: 4px;
    font-size: ${FONT_SIZES.medium};
    line-height: calc(23 / 16);
    ${({ txtAlign }) => txtAlign && `text-align: ${txtAlign}`};
  }

  textarea {
    resize: none;
  }

  select {
    appearance: none;
    background-image: url('/images/arrow_down.png');
    background-position: 97% 50%;
    background-repeat: no-repeat;
    background-size: 1.2rem 0.74rem;
  }

  label {
    font-weight: ${({ lbweight }) => lbweight && FIELD_LABEL_WEIGHT[lbweight]};
    font-size: ${FONT_SIZES.medium};
    padding-bottom: 1.5rem;
  }

  .count-letters {
    color: ${Variables.color5};
    padding-top: 0.8rem;
    font-size: ${FONT_SIZES.small};
    text-align: right;
    font-weight: ${Variables.fontWeightBold};
  }

  //custom datepicker from lib react-date-picker
  .react-datepicker-popper {
    width: 100%;
    text-align: right;
  }
  .react-datepicker {
    width: 100%;
    max-width: 40rem;
    &__month-container,
    &__current-month {
      width: 100%;
      font-size: 1.3rem;
    }
    &__day-names,
    &__week {
      display: flex;
      justify-content: space-around;
    }
  }

  .date-wrapper {
    position: relative;
  }

  input[type='button'] {
    position: absolute;
    cursor: pointer;
    border: none;

    background-image: url('/images/date_picker.png');
    background-repeat: no-repeat;
    background-size: contain;

    width: 2rem;
    height: 2.3rem;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

const FieldLabel = styled.div`
  display: flex;

  .lb-tag {
    border-radius: 2px;
    padding: 0.3rem;
    height: fit-content;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    &--require {
      color: ${Variables.colorSecondary};
      border: 1px solid ${Variables.colorSecondary};
    }
    &--any {
      color: ${Variables.color5};
      border: 1px solid ${Variables.color5};
    }
  }
`
export { FieldContainer, FieldLabel }
