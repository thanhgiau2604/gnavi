import { IDetailInformation, IInfomartion } from 'interfaces/TourPlan/TourInfo'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import TourInfoAdvanced from './Advanced'
import TourInfoBasic from './Basic'
import { TourInfoContainer } from './styled'

interface TourInfoProps {
  info: IInfomartion
}

const TourInfo: React.FC<TourInfoProps> = ({ info }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <TourInfoContainer>
      <FlexContainer justifyContent="space-between">
        <p className="field text--large">{info.field}</p>
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
      {info.field === 'スケジュール' ? (
        <TourInfoAdvanced />
      ) : (
        <div>
          {info.details &&
            info.details.map((detail: IDetailInformation, i: number) => (
              <TourInfoBasic key={i} detail={detail} />
            ))}
        </div>
      )}
    </TourInfoContainer>
  )
}

export default TourInfo
