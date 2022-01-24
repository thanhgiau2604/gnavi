import React from 'react'
import { TourPlan } from 'interfaces/TourPlan'
import { ScheduleInformation, PlanDetail } from 'interfaces/TourPlan/Schedule'
import ScheduleBlock from './Block'
import { DateTimeLabel, YearLabel } from './styled'

const Schedule: React.FC<TourPlan> = ({ plans }) => {
  return (
    <div className="schedule-container">
      {plans?.map((plan: PlanDetail, i: number) => (
        <div key={i}>
          <YearLabel>{plan.year}</YearLabel>
          {plan.scheduleInfos?.map((scheduleInfo: ScheduleInformation, j: number) => (
            <div key={j}>
              <DateTimeLabel>{scheduleInfo.datetime}</DateTimeLabel>
              <ScheduleBlock scheduleInfo={scheduleInfo} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Schedule
