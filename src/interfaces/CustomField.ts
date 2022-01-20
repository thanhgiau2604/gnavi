interface CustomFieldProps {
  label?: string
  width?: number
  height?: number
  pb?: number | null
  lbWeight?: 'bold' | 'normal'
  txtAlign?: 'left' | 'right' | 'center'
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

export type { CustomFieldProps, OptionProps, CustomSelectProps, CustomInputProps }
