import React, { useRef, useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { Container } from 'styles/styled/layout/ContainerLayout'
import Header from 'components/common/Header'
import { IInfomartion, ITourInfo } from 'interfaces/TourInfo'
import ButtonAction from 'components/common/TourPlan/ActionMenu/ButtonAction'
import ActionMenu from 'components/common/TourPlan/ActionMenu'
import TourInfo from 'components/tourplan/TourInfo'
import useOnClickOutSide from 'hooks/useOnClickOutSide'
import { TourPlanDetailContainer } from './styled'

const TourPlanDetail = () => {
  const data: ITourInfo = {
    id: 1,
    title: 'マングローブSUPバラス島上陸',
    images: ['/images/schedule02.png', '/images/schedule01.png'],
    infos: [
      {
        field: '案件情報',
        details: [
          {
            tag: '受注日',
            content: '2021年12月5日',
          },
          {
            tag: '催行日時',
            content: '2021年12月10日　9：00',
          },
          {
            tag: '概要',
            content: `西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！
            滝遊びと鍾乳洞探検を楽しんだ後はサンゴの欠片でできた”奇跡の島”バラス島への上陸＆シュノーケリング
            。コバルトブルーの海遊びで最高の1日を締めくくります！`,
          },
        ],
      },
      {
        field: '依頼元情報',
        details: [
          {
            tag: '受注形態',
            content: '直接',
          },
          {
            tag: '会社名',
            content: 'インバウンドツアーズ株式会社',
          },
          {
            tag: '電話番号',
            content: '03-0000-0000',
          },
          {
            tag: 'メールアドレス',
            content: '0taro@inbound.co.jp',
          },
          {
            tag: '報酬',
            content: '20,000円',
          },
          {
            tag: '経費',
            content: '2,500円',
          },
          {
            tag: '入金日',
            content: '2021年12月8日',
          },
          {
            tag: '支払い方法',
            content: '銀行振込',
          },
        ],
      },
      {
        field: 'ゲスト情報',
        details: [],
      },
      {
        field: 'ツアー行程',
        details: [
          {
            tag: 'ツアー時間',
            content: '9:00〜18:00',
          },
          {
            tag: '集合場所',
            content: '上原港（西表島北部）または上原地区の各ホテルへお迎え',
          },
        ],
      },
      {
        field: 'スケジュール',
        details: [
          {
            schedules: [
              {
                timeline: '10:00',
                title: 'クーラ川SUP',
                image: '/images/schedule02.png',
                content: `・SUPかカヌーをお好みでお選びいただけます 
                ・自然観察にうってつけのクーラ川をのんびりクルーズでマングローブの森を抜けていきます 
                ・普段見ることのない亜熱帯独特の植物は生き物を見て楽しみましょう`,
                transportation: ['徒歩', 'タクシー'],
              },

              {
                timeline: '10:30',
                title: 'トレッキング',
                image: '/images/schedule03.png',
                content: `SUP（またはカヌー）を岸につけたらジャングルを抜けてクーラの滝を目指します`,
                transportation: ['徒歩'],
              },
            ],
          },
        ],
      },
    ],
  }
  const [state, setState] = useState<boolean>(false)
  const ref = useRef(null)
  useOnClickOutSide(ref, () => setState(false))
  const handleDropdownMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setState(!state)
  }

  return (
    <div className="wrapper">
      <Header shadow showBtnBack title={data.title} backTo="/tourplan" />
      <Container padding="0 2rem">
        <TourPlanDetailContainer>
          <FlexContainer justifyContent="space-between">
            <h3 className="title">{data.title}</h3>
            <ButtonAction margin="auto 0" onClick={handleDropdownMenu} />
          </FlexContainer>
          <div ref={ref}>
            <ActionMenu state={state} id={data.id} transform="translate(-10%,62%)" />
          </div>
          <div className="tour-logs">
            {!!data?.infos?.length &&
              data.infos.map((info: IInfomartion, i: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <TourInfo key={`${i}`} info={info} />
              ))}
          </div>
        </TourPlanDetailContainer>
      </Container>
    </div>
  )
}

export default TourPlanDetail
