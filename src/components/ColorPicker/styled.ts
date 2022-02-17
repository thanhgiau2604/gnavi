import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface props {
  colorPreview?: string
}

export const ColorPickerContainer = styled.div<props>`
  width: 100%;
  padding: 40px 25px 25px 25px;

  .pointer {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid ${Variables.colorBlack};

    &-saturation {
      transform: translate(-9px, -10px);
    }

    &-hue {
      transform: translate(-9px, 0px);
    }
  }

  .saturation {
    height: 12rem;
    position: relative;
  }

  .preview {
    padding: 2.5rem 1rem 2.5rem 0.5rem;
    div {
      border: 1px solid ${Variables.color3};
      background-color: ${({ colorPreview }) => colorPreview && colorPreview};
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
    }
  }

  .hue {
    height: 1.8rem;
    position: relative;
    width: 100%;
  }

  .editable-input {
    display: flex;

    &-container {
      width: 100%;
      p {
        text-align: center;
        color: ${Variables.color4};
      }
    }

    input {
      border: 1px solid ${Variables.color3};
      padding: 3px;
      margin: 0 1rem;
      width: 95%;
      text-align: center;
    }

    button {
      background-color: ${Variables.colorWhite};
      border: none;
      cursor: pointer;

      img {
        width: 15px;
        height: 15px;
      }
    }
  }
`
