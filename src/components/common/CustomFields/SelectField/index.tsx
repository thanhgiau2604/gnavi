import React from 'react'
import { FieldProps } from 'formik'
import { CustomSelectProps } from 'interfaces/CustomField'
import { FieldContainer, FieldLabel } from '../styled'

const CustomSelect: React.FC<FieldProps & CustomSelectProps> = ({
  field,
  form: { touched, errors },
  label,
  options,
  disabled,
  required,
  ...props
}) => {
  const { width, height, pb, txtAlign, lbweight } = props
  const { name, value } = field
  const showError = Boolean(errors[name] && touched[name])

  const currentOption = options.find((option) => option.value === value)

  const handleSelectedOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value

    const changeEvent = {
      target: {
        name,
        value: selectedValue,
      },
    }
    field.onChange(changeEvent)
  }

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
          {required && <p className="require-mark">必須</p>}
        </FieldLabel>
      )}

      <select
        {...field}
        {...props}
        id={name}
        disabled={disabled}
        value={currentOption?.value}
        onChange={handleSelectedOptionChange}
      >
        {options.map((v, i) => (
          <option value={v.value} key={name + i.toString()}>
            {v.label}
          </option>
        ))}
      </select>
    </FieldContainer>
  )
}

CustomSelect.defaultProps = {
  label: '',
  width: 0,
  height: 0,
  pb: null,
  required: false,
  disabled: false,
  options: [],
  lbweight: 'bold',
}

export default CustomSelect
