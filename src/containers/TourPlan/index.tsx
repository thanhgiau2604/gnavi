import React from 'react'
import { FONT_SIZES, ROUTES } from '@constants'
import { TourLogProps, TourPlanProps } from 'interfaces/TourLog'
import { Container } from 'styles/styled/layout/ContainerLayout'
import Header from 'components/common/Header'
import Button from 'components/common/Button'
import TourLog from 'components/tourplan/TourLog'
import { useRouter } from 'next/router'
import { TourPlanContainer } from './styled'

const TourPlan = () => {
  const router = useRouter()
  const createTourPlan = () => {
    router.push(ROUTES.tour_plan.create)
  }
  // const data: TourPlanProps[] = []
  const data: TourPlanProps[] = [
    {
      id: 1,
      year: '2021年',
      tourLogs: [
        {
          id: 1,
          datetime: '12月15日',
          title: '西表・由布・竹富島めぐり日帰りツアー',
          images: [],
          content:
            '西表島では仲間川マングローブクルーズにご乗船。水牛車で由布島に渡り、亜熱帯特有の動植物を観察できる由布島植物……',
        },
        {
          id: 2,
          datetime: '12月12日',
          title: 'マンタとウミガメシュノーケリング+幻の島上陸ツアー',
          images: ['/images/schedule01.png', '/images/schedule02.png'],
          content:
            '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
        },
        {
          id: 3,
          datetime: '12月10日',
          title: 'マングローブSUP&バラス島上陸',
          images: ['/images/schedule02.png'],
          content:
            '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
        },
      ],
    },
  ]

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
            data.map((item: TourPlanProps) => (
              <div key={item.id}>
                <h3 className="title">{item.year}</h3>
                {item.tourLogs?.map((tourLog: TourLogProps) => (
                  <div key={tourLog.id}>
                    <p className="datetime">{tourLog.datetime}</p>
                    <TourLog data={tourLog} />
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
