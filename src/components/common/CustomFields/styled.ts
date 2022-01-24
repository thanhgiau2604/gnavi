import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'
import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/field'
import { LabelWeight, TextAlign } from 'interfaces/CustomField'

export interface FieldStyleProps {
  width?: number
  height?: number
  pb?: number | null // padding-bottom (if null --> common value)
  lbweight?: LabelWeight
  txtAlign?: TextAlign
  showError?: boolean
}

const FieldContainer = styled.div<FieldStyleProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ pb }) => (pb ? `calc( ${pb}rem / 10)` : `2.5rem`)};

  input,
  textarea,
  select {
    width: ${({ width }) => (width ? `calc( ${width}rem / 10)` : `32rem`)};
    height: ${({ height }) => (height ? `calc( ${height}rem / 10)` : `4.8rem`)};
    border: ${({ showError }) =>
      showError ? `1px solid ${Variables.colorSecondary}` : `1px solid ${Variables.color3}`};
    background-color: ${Variables.colorWhite};
    padding: 1.3rem;
    color: ${Variables.colorTextCommon};
    border-radius: 4px;
    font-size: ${fontSize.MEDIUM};
    line-height: calc(23 / 16);
    ${({ txtAlign }) => txtAlign && `text-align: ${txtAlign}`};
  }

  textarea {
    resize: none;
  }

  select {
    appearance: none;
    background-image: url('/images/arrow_down.png');
    background-position: 95% 50%;
    background-repeat: no-repeat;
    background-size: 1.2rem 0.74rem;
  }

  label {
    font-weight: ${({ lbweight }) => lbweight && FIELD_LABEL_WEIGHT[lbweight]};
    font-size: ${fontSize.MEDIUM};
    padding-bottom: 1.5rem;
  }

  .count-letters {
    color: ${Variables.color5};
    padding-top: 0.8rem;
    font-size: ${fontSize.SMALL};
    text-align: right;
    font-weight: 700;
  }

  //custom datepicker from lib react-date-picker
  .react-datepicker {
    width: ${({ width }) => (width ? `calc( ${width}rem / 10)` : `32rem`)};
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
