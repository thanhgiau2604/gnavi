import React from 'react'
import { FieldProps } from 'formik'
import { CustomInputProps } from 'interfaces/CustomField'
import { FieldContainer, FieldLabel } from '../styled'

const CustomInput: React.FC<FieldProps & CustomInputProps> = (props) => {
  const { field, form } = props // props from formik
  const { type, label, placeholder, disabled, required } = props // additional props
  const { width, height, pb, txtAlign, lbWeight } = props // css props
  const { name } = field
  const { errors, touched } = form
  const showError = Boolean(errors[name] && touched[name])

  return (
    <FieldContainer
      width={width}
      height={height}
      pb={pb}
      txtAlign={txtAlign}
      lbWeight={lbWeight}
      showError={showError}
    >
      {label && (
        <FieldLabel>
          <label htmlFor={name}>{label}</label>
          {required && <p className="require-mark">必須</p>}
        </FieldLabel>
      )}

      {type === 'text' ? (
        <input id={name} {...field} disabled={disabled} placeholder={placeholder} />
      ) : (
        <textarea id={name} {...field} disabled={disabled} placeholder={placeholder} />
      )}
    </FieldContainer>
  )
}

CustomInput.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  width: 0,
  height: 0,
  pb: null,
  required: false,
  disabled: false,
}

export default CustomInput
