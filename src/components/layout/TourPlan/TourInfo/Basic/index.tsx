import React from 'react'
import { IContent } from 'interfaces/TourPlan/Detail'
import { BasicInfoContainer } from './styled'

const TourInfoBasic: React.FC<IContent> = ({ tag, info }) => {
  return (
    <BasicInfoContainer>
      <p className="tag">{tag}</p>
      <p className="information">{info}</p>
    </BasicInfoContainer>
  )
}

export default TourInfoBasic
