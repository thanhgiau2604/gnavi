type LabelWeight = 'bold' | 'normal'
type TextAlign = 'left' | 'right' | 'center'

interface CustomFieldProps {
  label?: string
  width?: number
  height?: number
  pb?: number | null
  lbWeight?: LabelWeight
  txtAlign?: TextAlign
  disabled?: boolean
  required?: boolean
}

interface OptionProps {
  value: number | string
  label: string
}

interface CustomInputProps extends CustomFieldProps {
  type?: string
  placeholder?: string
}

interface CustomSelectProps extends CustomFieldProps {
  options: OptionProps[]
}

export type {
  CustomFieldProps,
  OptionProps,
  CustomSelectProps,
  CustomInputProps,
  LabelWeight,
  TextAlign,
}
