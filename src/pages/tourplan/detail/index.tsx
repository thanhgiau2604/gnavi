import React from 'react'
import Header from 'components/common/Header'
import { Container } from 'styles/styled/layout/ContainerLayout'
import TourPlanDetail from 'components/layout/TourPlan/Detail'

const TourPlan = () => {
  const data = {
    title: 'マングローブSUPバラス島上陸',
    images: ['/images/schedule02.png', '/images/schedule01.png'],
    details: [
      {
        field: '案件情報',
        content: [
          {
            tag: '受注日',
            info: '2021年12月5日',
          },
          {
            tag: '催行日時',
            info: '2021年12月10日　9：00',
          },
          {
            tag: '概要',
            info: `西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！
            滝遊びと鍾乳洞探検を楽しんだ後はサンゴの欠片でできた”奇跡の島”バラス島への上陸＆シュノーケリング
            。コバルトブルーの海遊びで最高の1日を締めくくります！`,
          },
        ],
      },
      {
        field: '依頼元情報',
        content: [
          {
            tag: '受注形態',
            info: '直接',
          },
          {
            tag: '会社名',
            info: 'インバウンドツアーズ株式会社',
          },
          {
            tag: '電話番号',
            info: '03-0000-0000',
          },
          {
            tag: 'メールアドレス',
            info: '0taro@inbound.co.jp',
          },
          {
            tag: '報酬',
            info: '20,000円',
          },
          {
            tag: '経費',
            info: '2,500円',
          },
          {
            tag: '入金日',
            info: '2021年12月8日',
          },
          {
            tag: '支払い方法',
            info: '銀行振込',
          },
        ],
      },
      {
        field: 'ゲスト情報',
        content: [],
      },
      {
        field: 'ツアー行程',
        content: [
          {
            tag: 'ツアー時間',
            info: '9:00〜18:00',
          },
          {
            tag: '集合場所',
            info: '上原港（西表島北部）または上原地区の各ホテルへお迎え',
          },
        ],
      },
      {
        field: 'スケジュール',
        content: [],
      },
    ],
  }
  return (
    <div className="wrapper">
      <Header shadow showBtnBack title="マングローブSUPバラス島上陸" />
      <Container padding="0 2rem">
        <TourPlanDetail data={data} />
      </Container>
    </div>
  )
}

export default TourPlan
