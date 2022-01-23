import React from 'react'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import Schedule from 'components/layout/Schedule'

const TourPlan = () => {
  const data = [
    {
      year: '2021年',
      schedules: [
        {
          datetime: '12月15日',
          title: '西表・由布・竹富島めぐり日帰りツアー',
          image: '',
          content:
            '西表島では仲間川マングローブクルーズにご乗船。水牛車で由布島に渡り、亜熱帯特有の動植物を観察できる由布島植物……',
        },
        {
          datetime: '12月12日',
          title: 'マンタとウミガメシュノーケリング+幻の島上陸ツアー',
          image: '/images/schedule01.png',
          content:
            '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
        },
        {
          datetime: '12月10日',
          title: 'マングローブSUP&バラス島上陸',
          image: '/images/schedule02.png',
          content:
            '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
        },
      ],
    },
  ]
  return (
    <div className="wrapper">
      <Header shadow showBtnBack title="ツアープラン一覧" />
      <div className="container">
        <Button title="＋新規ツアープランの追加" radius={4} />
        <Schedule data={data} />
      </div>
    </div>
  )
}

export default TourPlan
