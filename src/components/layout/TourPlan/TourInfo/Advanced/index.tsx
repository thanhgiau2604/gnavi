import Image from 'next/image'
import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { AdvancedInfoContainer } from './styled'

interface TourInfoAdvancedProps {
  title: string
  image: string
  content: string
  transportation: string[]
}

const TourInfoAdvanced: React.FC<TourInfoAdvancedProps> = ({
  title,
  image,
  content,
  transportation,
}) => {
  return (
    <AdvancedInfoContainer>
      <h5 className="title">{title}</h5>
      {image && (
        <ImageContainer width="100%" height={155} margin="1rem auto 1.7rem auto">
          <Image src={image} layout="fill" objectFit="fill" />
        </ImageContainer>
      )}
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
      <div className="icon icon-doc">
        <ImageContainer width={16} height={20}>
          <Image src="/images/doc.png" layout="fill" objectFit="fill" />
        </ImageContainer>
      </div>
    </AdvancedInfoContainer>
  )
}

export default TourInfoAdvanced
