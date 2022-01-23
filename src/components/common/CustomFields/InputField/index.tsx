import React from 'react'
import { FieldProps } from 'formik'
import { CustomInputProps } from 'interfaces/CustomField'
import { LABEL_TAGS } from 'constants/field'
import { FieldContainer, FieldLabel } from '../styled'

const CustomInput: React.FC<FieldProps & CustomInputProps> = ({
  field,
  form: { touched, errors },
  type,
  label,
  placeholder,
  disabled,
  lbTag,
  ...props
}) => {
  const { width, height, pb, txtAlign, lbweight } = props // css props
  const { name } = field
  const showError = Boolean(errors[name] && touched[name])

  return (
    <FieldContainer
      width={width}
      height={height}
      pb={pb}
      txtAlign={txtAlign}
      lbweight={lbweight}
      showError={showError}
    >
      {label && (
        <FieldLabel>
          <label htmlFor={name}>{label}</label>
          {lbTag === LABEL_TAGS.REQUIRE && <p className="lb-tag lb-tag--require">必須</p>}
          {lbTag === LABEL_TAGS.ANY && <p className="lb-tag lb-tag--any">任意</p>}
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

      {props.maxLength && (
        <p className="count-words">{`${String(field.value).length} / ${props.maxLength}`}</p>
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
  lbTag: 'none',
  disabled: false,
  lbweight: 'bold',
}

export default CustomInput
