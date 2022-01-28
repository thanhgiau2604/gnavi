import React from 'react'
import { IDetailInformation } from 'interfaces/TourInfo'
import { BasicInfoContainer } from './styled'

interface TourInfoBasicProps {
  detail: IDetailInformation
}

const TourInfoBasic: React.FC<TourInfoBasicProps> = ({ detail }) => {
  return (
    <BasicInfoContainer>
      {detail.tag && <p className="tag">{detail.tag}</p>}
      {detail.content && <p className="information">{detail.content}</p>}
    </BasicInfoContainer>
  )
}

export default TourInfoBasic
