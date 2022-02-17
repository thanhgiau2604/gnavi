import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { PlanInfoProps } from 'interfaces/TourPlan'
import { TourEventProps } from 'interfaces/TourEvent'
import PullDownMenu from 'components/common/PullDownMenu'
import PullDownMenuItem from 'components/common/PullDownMenu/PullDownMenuItem'
import { SpotInfoContainer } from './styled'
import TourPlanAdvancedInfo from '../Advanced'

interface Props {
  data: PlanInfoProps
}

const TourPlanSpotInfo: React.FC<Props> = ({ data }) => {
  return (
    <Container padding="0 2rem">
      <SpotInfoContainer>
        <PullDownMenu title="ツアー行程" hr>
          <PullDownMenuItem
            tag="ツアー時間"
            info={`${data.tour_start_time}〜${data.tour_end_time}`}
          />
          <PullDownMenuItem tag="集合場所" info={data.meeting_place} />
          <PullDownMenuItem tag="解散場所" info={data.dissolution_place} />
        </PullDownMenu>
        <PullDownMenu title="スケジュール" hr>
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
        </PullDownMenu>
      </SpotInfoContainer>
    </Container>
  )
}

export default TourPlanSpotInfo
