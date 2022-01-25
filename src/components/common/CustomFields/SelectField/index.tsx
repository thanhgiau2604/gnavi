import React from 'react'
import { FieldProps } from 'formik'
import { CustomSelectProps } from 'interfaces/CustomField'
import { FIELD_DF_VALUE, LABEL_TAGS } from 'constants/index'
import { FieldContainer, FieldLabel } from '../styled'

const CustomSelect: React.FC<FieldProps & CustomSelectProps> = ({
  field,
  form: { touched, errors },
  label,
  options,
  disabled,
  lbTag,
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
          {lbTag === LABEL_TAGS.REQUIRE && <p className="lb-tag lb-tag--require">必須</p>}
          {lbTag === LABEL_TAGS.ANY && <p className="lb-tag lb-tag--any">任意</p>}
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
  label: FIELD_DF_VALUE.label,
  width: FIELD_DF_VALUE.width,
  height: FIELD_DF_VALUE.height,
  pb: FIELD_DF_VALUE.padding_bottom,
  disabled: FIELD_DF_VALUE.disabled,
  lbweight: FIELD_DF_VALUE.label_weight,
  lbTag: FIELD_DF_VALUE.label_tag,
  options: FIELD_DF_VALUE.options,
}

export default CustomSelect
