import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from 'styles/styled/app/Variables'

const CardTemplateComponent = styled.div`
  border: 1px solid ${Variables.color3};
  margin-top: 8.8rem;
  .business-card {
    font-size: ${FONT_SIZES.xsmall};
    .info {
      .name {
        font-size: ${FONT_SIZES.medium};
        margin-top: 0.6rem;
        padding: 1rem 0;
      }
    }
    .contact {
      margin-top: 2.68rem;
    }
  }
`

export { CardTemplateComponent }
