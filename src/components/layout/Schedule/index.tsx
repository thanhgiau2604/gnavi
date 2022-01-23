import React from 'react'
import ScheduleBlock from './Block'
import { DateTimeLabel, YearLabel } from './styled'

interface ScheduleProps {
  data: any
}

const Schedule: React.FC<ScheduleProps> = ({ data }) => {
  return (
    <div className="schedule-container">
      {data?.map((item: any, i: number) => (
        <div key={i}>
          <YearLabel>{item.year}</YearLabel>
          {item.schedules?.map((schedule: any, j: number) => (
            <div key={j}>
              <DateTimeLabel>{schedule.datetime}</DateTimeLabel>
              <ScheduleBlock data={schedule} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Schedule
