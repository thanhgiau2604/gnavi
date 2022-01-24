import React from 'react'
import { IContent } from 'interfaces/TourPlan/Detail'
import { ContentContainer } from './styled'

const Content: React.FC<IContent> = ({ tag, info }) => {
  return (
    <ContentContainer>
      <p className="tag">{tag}</p>
      <p className="information">{info}</p>
    </ContentContainer>
  )
}

export default Content
