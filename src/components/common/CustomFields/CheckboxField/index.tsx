import React from 'react'
import { FieldProps } from 'formik'
import { CustomCheckboxProps } from 'interfaces/CustomField'
import { FieldCheckboxContainer, FieldCheckboxLabel } from './styled'

const CustomCheckBox: React.FC<FieldProps & CustomCheckboxProps> = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  const { width, height, pb, lbweight, theme, ...rest } = props // css props
  const { name } = field
  field.value = label
  const showError = Boolean(errors[name] && touched[name])
  return (
    <FieldCheckboxContainer
      width={width}
      height={height}
      pb={pb}
      showError={showError}
      cbTheme={theme}
    >
      <FieldCheckboxLabel lbweight={lbweight} cbTheme={theme}>
        {label}
        <input type="checkbox" {...field} {...rest} />
        <span className="check-mark" />
      </FieldCheckboxLabel>
    </FieldCheckboxContainer>
  )
}

CustomCheckBox.defaultProps = {
  label: '',
  width: 0,
  height: 0,
  pb: null,
  required: false,
  disabled: false,
  lbweight: 'bold',
}

export default CustomCheckBox
