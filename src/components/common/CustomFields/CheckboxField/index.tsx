import React from 'react'
import { FieldProps } from 'formik'
import { CustomCheckboxProps } from 'interfaces/CustomField'
import { FIELD_DF_VALUE } from 'constants/index'
import { FieldCheckboxContainer, FieldCheckboxLabel } from './styled'

const CustomCheckBox: React.FC<FieldProps & CustomCheckboxProps> = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  const { width, height, pb, lbweight, theme } = props // css props
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
        <input type="checkbox" {...field} {...props} />
        <span className="check-mark" />
      </FieldCheckboxLabel>
    </FieldCheckboxContainer>
  )
}

CustomCheckBox.defaultProps = {
  label: FIELD_DF_VALUE.label,
  width: FIELD_DF_VALUE.checkbox_width,
  height: FIELD_DF_VALUE.checkbox_height,
  pb: FIELD_DF_VALUE.padding_bottom,
  disabled: FIELD_DF_VALUE.disabled,
  lbweight: FIELD_DF_VALUE.label_weight,
}

export default CustomCheckBox
