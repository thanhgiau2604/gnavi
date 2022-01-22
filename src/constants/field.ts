import { CheckboxTheme } from 'interfaces/CustomField'
import { Variables } from 'styles/styled/app/Variables'

export const FIELD_LABEL_WEIGHT = {
  normal: 400,
  bold: 700,
}

interface CheckboxThemes {
  [theme: string]: CheckboxTheme
}

export const CHECKBOX_THEME: CheckboxThemes = {
  PRIMARY: {
    border: `0.2rem solid ${Variables.color3}`,
    checkedBg: Variables.colorWhite,
    checkedColor: Variables.colorBlack,
    checkedWidth: '0.7rem',
    checkedHeight: '1.7rem',
    checkedWeight: '2px',
  },
  SECONDARY: {
    border: 'none',
    checkedBg: 'check_circle',
    checkedColor: Variables.colorWhite,
    checkedWidth: '0rem',
    checkedHeight: '1rem',
    checkedWeight: '0px',
  },
}
