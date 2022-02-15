import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { PlanInfoProps } from 'interfaces/TourPlan'
import { TourEventProps } from 'interfaces/TourEvent'
import { SpotInfoContainer } from './styled'
import TourPlanAdvancedInfo from '../Advanced'

interface Props {
  data: PlanInfoProps
}

const TourPlanSpotInfo: React.FC<Props> = ({ data }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <Container padding="0 2rem">
      <SpotInfoContainer>
        <FlexContainer justifyContent="space-between" margin="4rem auto auto auto">
          <p className="field text--large">ツアー行程</p>
          <ImageContainer
            onClick={() => setShow(!show)}
            className={`icon icon-${show ? 'expand' : 'collapse'}`}
            width={20}
            height={20}
          >
            <Image src="/icons/circle_arrow.svg" layout="fill" objectFit="contain" />
          </ImageContainer>
        </FlexContainer>
        <hr />
        <p className="tag">ツアー時間</p>
        <p className="information">{`${data.tour_start_time}〜${data.tour_end_time}`}</p>
        <p className="tag">集合場所</p>
        <p className="information">{data.meeting_place}</p>
        <p className="tag">解散場所</p>
        <p className="information">{data.dissolution_place}</p>
        <FlexContainer justifyContent="space-between" margin="4rem auto auto auto">
          <p className="field text--large">スケジュール</p>
          <ImageContainer
            onClick={() => setShow(!show)}
            className={`icon icon-${show ? 'expand' : 'collapse'}`}
            width={20}
            height={20}
          >
            <Image src="/icons/circle_arrow.svg" layout="fill" objectFit="contain" />
          </ImageContainer>
        </FlexContainer>
        <hr />
        <table className="table-event">
          <tbody>
            {!!data.events.length &&
              data.events.map((item: TourEventProps, i: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={i}>
                  <td>
                    <p className="timeline">{item.start_time}</p>
                    <div className="circle" />
                  </td>
                  <td>
                    <TourPlanAdvancedInfo
                      title={item.event_name}
                      content={item.content}
                      transportation={item.transporation}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </SpotInfoContainer>
    </Container>
  )
}

export default TourPlanSpotInfo
