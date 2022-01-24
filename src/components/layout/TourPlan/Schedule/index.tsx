import React from 'react'
import { TourPlan } from 'interfaces/TourPlan'
import { ScheduleInformation, PlanDetail } from 'interfaces/TourPlan/Schedule'
import { ScheduleContainer } from './styled'
import ScheduleBlock from './Block'

const Schedule: React.FC<TourPlan> = ({ plans }) => {
  return (
    <ScheduleContainer>
      {plans?.map((plan: PlanDetail, i: number) => (
        <div key={i}>
          <h3 className="title">{plan.year}</h3>
          {plan.scheduleInfos?.map((scheduleInfo: ScheduleInformation, j: number) => (
            <div key={j}>
              <p className="datetime">{scheduleInfo.datetime}</p>
              <ScheduleBlock scheduleInfo={scheduleInfo} />
            </div>
          ))}
        </div>
      ))}
    </ScheduleContainer>
  )
}

export default Schedule
