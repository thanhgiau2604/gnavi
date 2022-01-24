import { CheckboxTheme, LabelTag, LabelWeight } from 'interfaces/CustomField'
import { Variables } from 'styles/styled/app/Variables'

const DF_LABEL_TAG: LabelTag = 'none'
const DF_LABEL_WIGHT: LabelWeight = 'bold'
export const FIELD_DF_VALUE = {
  type: 'text',
  width: '100%',
  height: 48,
  padding_bottom: null,
  placeholder: '',
  disabled: false,
  label: '',
  label_tag: DF_LABEL_TAG,
  label_weight: DF_LABEL_WIGHT,
  checkbox_width: 24,
  checkbox_height: 24,
  options: [],
}

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

interface LabelTags {
  [name: string]: LabelTag
}

export const LABEL_TAGS: LabelTags = {
  REQUIRE: 'require',
  ANY: 'any',
  NONE: 'none',
}
