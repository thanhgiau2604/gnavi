import React from 'react'
import { DATETIME_FORMAT, FONT_SIZES, ROUTES, TOUR_PLAN_LIST_FAKE_FULL_DATA } from '@constants'
import { Container } from 'styles/styled/layout/ContainerLayout'
import Header from 'components/common/Header'
import Button from 'components/common/Button'
import { useRouter } from 'next/router'
import { TourPlanItemProps, TourPlanListProps } from 'interfaces/TourPlan'
import { formatDateTime } from 'utils/helper'
import { TourPlanContainer } from './styled'
import TourPlanItem from 'components/tourplan/TourPlanItem'

const TourPlan = () => {
  const router = useRouter()
  const createTourPlan = () => {
    router.push(ROUTES.tour_plan.create)
  }
  const data: TourPlanListProps[] = TOUR_PLAN_LIST_FAKE_FULL_DATA

  return (
    <div className="wrapper">
      <Header shadow showBtnBack title="ツアープラン一覧" backTo={ROUTES.home} />
      <Container padding="0 2rem" backgroundColor="rgba(239,239,239,255)" height="100vh">
        <Button
          title="＋新規ツアープランの追加"
          fontWeight={700}
          _fontSize={FONT_SIZES.large}
          radius={4}
          onClick={createTourPlan}
        />
        <TourPlanContainer>
          {!!data?.length &&
            data.map((item: TourPlanListProps) => (
              <div key={item.id}>
                <h3 className="title">{item.year}</h3>
                {!!item?.tour_plan_list?.length &&
                  item.tour_plan_list?.map((tour_plan_item: TourPlanItemProps) => (
                    <div key={tour_plan_item.id}>
                      <p className="datetime">
                        {formatDateTime(tour_plan_item.datetime, DATETIME_FORMAT.template02)}
                      </p>
                      <TourPlanItem
                        id={tour_plan_item.id}
                        datetime={tour_plan_item.datetime}
                        title={tour_plan_item.title}
                        content={tour_plan_item.content}
                      />
                    </div>
                  ))}
              </div>
            ))}
        </TourPlanContainer>
      </Container>
    </div>
  )
}

export default TourPlan
