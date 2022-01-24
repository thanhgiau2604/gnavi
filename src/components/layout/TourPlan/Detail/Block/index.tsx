import { Detail, IContent } from 'interfaces/TourPlan/Detail'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Content from './Content'
import { TourPlanDetailBlockContainer } from './styled'

const TourPlanDetailBlock: React.FC<Detail> = ({ field, content }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <TourPlanDetailBlockContainer>
      <FlexContainer justifyContent="space-between">
        <p className="field text--large">{field}</p>
        <ImageContainer
          onClick={() => setShow(!show)}
          className={`icon icon-${show ? 'expand' : 'collapse'}`}
          width={20}
          height={20}
        >
          <Image src="/images/circle_arrow.png" layout="fill" objectFit="contain" />
        </ImageContainer>
      </FlexContainer>
      <hr />
      {content &&
        content.map((c: IContent, i: number) => <Content key={i} tag={c.tag} info={c.info} />)}
    </TourPlanDetailBlockContainer>
  )
}

export default TourPlanDetailBlock
