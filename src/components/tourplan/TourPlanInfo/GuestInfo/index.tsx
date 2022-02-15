import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { GuestInfoProps } from 'interfaces/TourPlan'
import { GuestInfoContainer } from './styled'

interface Props {
  data: GuestInfoProps
}

const TourPlanGuestInfo: React.FC<Props> = ({ data }) => {
  const [show, setShow] = useState<boolean>(true)
  const format = (theme: string, arg: number): string => {
    if (arg > 0) return `${theme} ${arg}人`
    return ''
  }

  return (
    <Container padding="0 2rem">
      <GuestInfoContainer>
        <FlexContainer justifyContent="space-between" margin="4rem auto auto auto">
          <p className="field text--large">ゲスト情報</p>
          <ImageContainer
            onClick={() => setShow(!show)}
            className={`icon icon-${show ? 'expand' : 'collapse'}`}
            width={20}
            height={20}
          >
            <Image src="/icons/circle_arrow.svg" layout="fill" objectFit="contain" />
          </ImageContainer>
        </FlexContainer>
        <hr />
        <p className="tag">参加人数</p>
        <p className="information">
          {format('大人：', data.no_of_adults)}
          {format('小人：', data.no_of_teens)}
          {format('幼児：', data.no_of_childs)}
        </p>
        <p className="tag">参加者同志の関係性</p>
        <p className="information">{data.relation}</p>
        <p className="tag">食事の制限</p>
        <p className="information">{data.diet}</p>
        <p className="tag">代表者</p>
        <p className="information">{`${data.represent} / ${data.gender} / ${data.age}歳`}</p>
        <p className="tag">国籍</p>
        <p className="information">{data.country}</p>
        <p className="tag">連絡先電話番号</p>
        <p className="information">{data.contact_phone}</p>
        <p className="tag">連絡先メールアドレス</p>
        <p className="information">{data.contact_email}</p>
        <p className="tag">メモ（希望など）</p>
        <p className="information">{data.note}</p>
      </GuestInfoContainer>
    </Container>
  )
}

export default TourPlanGuestInfo
