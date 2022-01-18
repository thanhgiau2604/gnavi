import React from 'react'
import { FieldProps } from 'formik'

interface CustomInputProps {
  type: string
  label: string
  placeholder: string
  disabled: boolean
}

const CustomInput: React.FC<FieldProps & CustomInputProps> = (props) => {
  const { field, form, type, placeholder, disabled } = props
  const { name } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  return (
    <div className="custom-input">
      <input id={name} {...field} type={type} disabled={disabled} placeholder={placeholder} />
      {showError && <div className="error">{errors[field.name]}</div>}
    </div>
  )
}
export default CustomInput
