import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FieldProps } from 'formik'
import { CustomInputProps } from 'interfaces/CustomField'
import { LABEL_TAGS } from 'constants/field'
import { FieldContainer, FieldLabel } from '../styled'

const CustomDate: React.FC<FieldProps & CustomInputProps> = ({
  field,
  form: { touched, errors },
  label,
  placeholder,
  disabled,
  lbTag,
  ...props
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { width, height, pb, txtAlign, lbweight } = props // css props
  const { name } = field
  const showError = Boolean(errors[name] && touched[name])

  const handleChangeDateTime = (date: Date) => {
    const changeEvent = {
      target: {
        name,
        value: date,
      },
    }
    field.onChange(changeEvent)
  }

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as Element).className !== 'calendar-btn') {
      setOpen(false)
    }
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

      <div className="date-wrapper">
        <DatePicker
          {...field}
          placeholderText={placeholder}
          selected={field.value}
          onChange={handleChangeDateTime}
          dateFormat="yyyy/MM/dd"
          open={isOpen}
          disabled={disabled}
          onClickOutside={handleClickOutside}
        />
        <input type="button" className="calendar-btn" onClick={() => setOpen((open) => !open)} />
      </div>
    </FieldContainer>
  )
}

CustomDate.defaultProps = {
  placeholder: 'YYYY/MM/DD',
  label: '',
  width: 0,
  height: 0,
  pb: null,
  lbTag: 'none',
  disabled: false,
  lbweight: 'bold',
}
export default CustomDate
