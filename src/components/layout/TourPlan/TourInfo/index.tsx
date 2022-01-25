import { Detail, IContent } from 'interfaces/TourPlan/Detail'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import TourInfoAdvanced from './Advanced'
import TourInfoBasic from './Basic'
import { TourInfoContainer } from './styled'

const TourInfo: React.FC<Detail> = ({ field, content }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <TourInfoContainer>
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
      {field === 'スケジュール' ? (
        <TourInfoAdvanced />
      ) : (
        <div>
          {content &&
            content.map((c: IContent, i: number) => (
              <TourInfoBasic key={i} tag={c.tag} info={c.info} />
            ))}
        </div>
      )}
    </TourInfoContainer>
  )
}

export default TourInfo
