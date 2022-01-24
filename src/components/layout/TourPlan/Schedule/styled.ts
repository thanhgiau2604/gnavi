import styled from 'styled-components'
import { FIELD_LABEL_WEIGHT } from 'constants/customField'
import { fontSize } from 'constants/index'

const YearLabel = styled.h3`
  font-size: ${fontSize.XLARGE};
  font-weight: ${FIELD_LABEL_WEIGHT.bold};
  margin-bottom: 1.2rem;
  padding: 0 0.6rem;
`

const DateTimeLabel = styled.p`
  font-size: ${fontSize.SMALL};
  font-weight: ${FIELD_LABEL_WEIGHT.normal};
  margin-bottom: 1.2rem;
  padding: 0 0.6rem;
`

export { YearLabel, DateTimeLabel }
