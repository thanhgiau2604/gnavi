type LabelWeight = 'bold' | 'normal'
type LabelTag = 'require' | 'any' | 'none'
type TextAlign = 'left' | 'right' | 'center'
type FieldWidth = number | string
type FieldPaddingBottom = number | null

interface CustomFieldProps {
  label?: string
  width?: FieldWidth
  height?: number
  pb?: FieldPaddingBottom
  lbweight?: LabelWeight
  lbTag?: LabelTag
  txtAlign?: TextAlign
  disabled?: boolean
}

interface OptionProps {
  value: number | string
  label: string
}

interface CustomInputProps extends CustomFieldProps {
  type?: string
  placeholder?: string
  maxLength?: number
}

interface CustomSelectProps extends CustomFieldProps {
  options: OptionProps[]
}

interface CheckboxTheme {
  border: string
  checkedBg: string
  checkedColor: string
  checkedWidth: string
  checkedHeight: string
  checkedWeight: string
}
interface CustomCheckboxProps extends CustomFieldProps {
  theme: CheckboxTheme
}

export type {
  CustomFieldProps,
  OptionProps,
  CustomSelectProps,
  CustomInputProps,
  LabelWeight,
  TextAlign,
  CheckboxTheme,
  CustomCheckboxProps,
  LabelTag,
  FieldWidth,
  FieldPaddingBottom,
}
