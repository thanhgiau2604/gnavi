import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ImageContainer } from 'styles/styled/app/Image'
import { ITourLog } from 'interfaces/TourPlan/TourLog'
import { TourLogContainer } from './styled'

interface TourLogProps {
  tourLog: ITourLog
}

const TourLog: React.FC<TourLogProps> = ({ tourLog }) => {
  return (
    <Link href={`/tourplan/detail?id=${tourLog.id}`}>
      <TourLogContainer>
        <FlexContainer position="relative">
          <p className="title">{tourLog.title}</p>
          <div className="btn-more">
            <Image src="/images/more.png" alt="" width={16} height={4} objectFit="contain" />
          </div>
        </FlexContainer>
        {!!tourLog.images.length && (
          <ImageContainer width="100%" height={200} margin="1.1rem auto 2rem auto">
            <Image src={tourLog.images[0]} alt="" layout="fill" objectFit="fill" priority />
          </ImageContainer>
        )}
        <p className="content">{tourLog.content}</p>
        {/* Will replace soon */}
        <div className="btn btn-icon">
          <Image src="/images/like.png" layout="fill" objectFit="contain" />
        </div>
      </TourLogContainer>
    </Link>
  )
}

export default TourLog
