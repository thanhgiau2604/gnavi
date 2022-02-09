import { FONT_SIZES } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/custom_field'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const BasicInfoContainer = styled.div`
  font-size: ${FONT_SIZES.medium};
  margin: 2.3rem auto;
  .tag {
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    line-height: 1.5;
    border-left: ${`4px solid ${Variables.color1}`};
    padding: 0 1rem;
  }
  .information {
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    line-height: 1.5;
    padding: 0 1.4rem;
    margin-top: 1.5rem;
  }
`

export { BasicInfoContainer }
