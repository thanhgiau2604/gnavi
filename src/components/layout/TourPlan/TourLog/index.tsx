import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ScheduleInformation } from 'interfaces/TourPlan/Schedule'
import { ImageContainer } from 'styles/styled/app/Image'
import { TourLogContainer } from './styled'

interface TourLogProps {
  scheduleInfo: ScheduleInformation
}

const TourLog: React.FC<TourLogProps> = ({ scheduleInfo }) => {
  return (
    <Link href={`/tourplan/detail?id=${scheduleInfo.id}`}>
      <TourLogContainer>
        <FlexContainer position="relative">
          <p className="title">{scheduleInfo.title}</p>
          <div className="btn-more">
            <Image src="/images/more.png" alt="" width={16} height={4} objectFit="contain" />
          </div>
        </FlexContainer>
        {scheduleInfo.image && (
          <ImageContainer width="100%" height={200} margin="1.1rem auto 2rem auto">
            <Image src={scheduleInfo.image} alt="" layout="fill" objectFit="fill" priority />
          </ImageContainer>
        )}
        <p className="content">{scheduleInfo.content}</p>
        {/* Will replace soon */}
        <div className="btn btn-icon">
          <Image src="/images/like.png" layout="fill" objectFit="contain" />
        </div>
      </TourLogContainer>
    </Link>
  )
}

export default TourLog
