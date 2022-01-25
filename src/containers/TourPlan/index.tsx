import React from 'react'
import Header from 'components/common/Header'
import { Container } from 'styles/styled/layout/ContainerLayout'
import Button from 'components/common/Button'
import { fontSize } from 'constants/index'
import { ITourLog, ITourPlan } from 'interfaces/TourPlan/TourLog'
import { TourPlanContainer } from './styled'
import TourLog from 'components/layout/TourPlan/TourLog'

const TourPlan = () => {
  const data: ITourPlan[] = [
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
      <Header shadow showBtnBack title="ツアープラン一覧" />
      <Container padding="0 2rem" backgroundColor="rgba(239,239,239,255)">
        <Button
          title="＋新規ツアープランの追加"
          fontWeight={700}
          _fontSize={fontSize.LARGE}
          radius={4}
        />
        <TourPlanContainer>
          {data &&
            data.map((item: ITourPlan, i: number) => (
              <div key={i}>
                <h3 className="title">{item.year}</h3>
                {item.tourLogs?.map((tourLog: ITourLog, j: number) => (
                  <div key={j}>
                    <p className="datetime">{tourLog.datetime}</p>
                    <TourLog tourLog={tourLog} />
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
