import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ScheduleInformation } from 'interfaces/TourPlan/Schedule'
import { ScheduleBlockContainer } from './styled'

interface ScheduleBlockProps {
  scheduleInfo: ScheduleInformation
}

const ScheduleBlock: React.FC<ScheduleBlockProps> = ({ scheduleInfo }) => {
  return (
    <Link href="#">
      <ScheduleBlockContainer>
        <FlexContainer position="relative">
          <p className="title">{scheduleInfo.title}</p>
          <div className="btn-more">
            <Image src="/images/more.png" alt="" width={16} height={4} objectFit="contain" />
          </div>
        </FlexContainer>
        {scheduleInfo.image && (
          <div className="image-container">
            <Image src={scheduleInfo.image} alt="" layout="fill" objectFit="fill" priority />
          </div>
        )}
        <p className="content">{scheduleInfo.content}</p>
        {/* Will replace soon */}
        <div className="btn btn-icon">
          <Image src="/images/like.png" layout="fill" objectFit="contain" />
        </div>
      </ScheduleBlockContainer>
    </Link>
  )
}

export default ScheduleBlock
