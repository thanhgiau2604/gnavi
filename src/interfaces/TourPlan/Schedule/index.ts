interface ScheduleInformation {
  id: number | null
  datetime: string | ''
  title: string | ''
  image: string | ''
  content: string | ''
}

interface PlanDetail {
  year: string | ''
  scheduleInfos: ScheduleInformation[] | []
}

export type { PlanDetail, ScheduleInformation }
