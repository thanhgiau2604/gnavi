import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { AdvancedInfoContainer } from './styled'

interface TourInfoAdvancedProps {
  title: string
  content: string
  transportation: string[]
}

const TourInfoAdvanced: React.FC<TourInfoAdvancedProps> = ({ title, content, transportation }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <AdvancedInfoContainer>
      <FlexContainer>
        <h5 className="title">{title}</h5>
        <ImageContainer
          onClick={() => setShow(!show)}
          className={`icon-${show ? 'expand' : 'collapse'}`}
          width={20}
          height={20}
        >
          <Image src="/icons/circle_arrow.svg" layout="fill" objectFit="contain" />
        </ImageContainer>
      </FlexContainer>
      <p className="content fm-noto">{content}</p>
      {!!transportation.length && (
        <div className="transportation">
          <h6 className="title">移動手段</h6>
          <FlexContainer>
            {transportation.map((trans: string, i: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`${i}`} className="content">
                {trans}
              </p>
            ))}
          </FlexContainer>
        </div>
      )}
    </AdvancedInfoContainer>
  )
}

export default TourInfoAdvanced
