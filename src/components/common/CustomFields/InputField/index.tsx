import React from 'react'
import { FieldProps } from 'formik'
import { CustomInputProps } from 'interfaces/CustomField'
import { FieldContainer, FieldLabel } from '../styled'

const CustomInput: React.FC<FieldProps & CustomInputProps> = ({
  field,
  form: { touched, errors },
  type,
  label,
  placeholder,
  disabled,
  required,
  ...props
}) => {
  const { width, height, pb, txtAlign, lbWeight } = props // css props
  const { name } = field
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

      {type !== 'text-area' ? (
        <input
          {...field}
          {...props}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
        />
      ) : (
        <textarea id={name} {...field} {...props} disabled={disabled} placeholder={placeholder} />
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
  lbWeight: 'bold',
}

export default CustomInput
