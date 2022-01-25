import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { Container } from 'styles/styled/layout/ContainerLayout'
import Header from 'components/common/Header'
import TourInfo from 'components/layout/TourPlan/TourInfo'
import { TourPlanDetailContainer } from './styled'

const TourPlanDetail = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
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
        content: [
          {
            timeline: '10:00',
            title: 'クーラ川SUP',
            image: '',
            info: `・SUPかカヌーをお好みでお選びいただけます 
              ・自然観察にうってつけのクーラ川をのんびりクルーズでマングローブの森を抜けていきます 
              ・普段見ることのない亜熱帯独特の植物は生き物を見て楽しみましょう`,
            transport: '徒歩 / タクシー',
          },
        ],
      },
    ],
  }
  return (
    <div className="wrapper">
      <Header shadow showBtnBack title={data.title} />
      <Container padding="0 2rem">
        <TourPlanDetailContainer>
          <h3 className="title">{data.title}</h3>
          <div className="slider">
            <Slider {...settings}>
              {data.images &&
                data.images.map((image: string, i: number) => (
                  <ImageContainer key={i} width="100%" height={230}>
                    <Image src={image} alt="" layout="fill" objectFit="fill" priority />
                  </ImageContainer>
                ))}
            </Slider>
            <div className="image-box">
              <FlexContainer justifyContent="space-between">
                <ImageContainer className="icon icon-camera" width={20} height={18}>
                  <Image src="/images/camera.png" alt="" layout="fill" objectFit="fill" priority />
                </ImageContainer>
                <p className="counter">{data.images && `(${data.images.length})`}</p>
              </FlexContainer>
            </div>
          </div>
          {data.details &&
            data.details.map((detail: any, i: number) => (
              <TourInfo key={i} field={detail.field} content={detail.content} />
            ))}
        </TourPlanDetailContainer>
      </Container>
    </div>
  )
}

export default TourPlanDetail
