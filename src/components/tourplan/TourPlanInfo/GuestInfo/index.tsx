import React from 'react'
import PullDownMenu from 'components/common/PullDownMenu'
import PullDownMenuItem from 'components/common/PullDownMenu/PullDownMenuItem'
import { GuestInfoProps } from 'interfaces/TourPlan'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { GuestInfoContainer } from './styled'

interface Props {
  data: GuestInfoProps
}

const TourPlanGuestInfo: React.FC<Props> = ({ data }) => {
  const format = (theme: string, arg: number): string => {
    if (arg > 0) return `${theme} ${arg}人`
    return ''
  }

  return (
    <Container padding="0 2rem">
      <GuestInfoContainer>
        <PullDownMenu title="ゲスト情報" hr>
          <PullDownMenuItem
            tag="参加人数"
            info={`${format('大人：', data.no_of_adults)}
            ${format('小人：', data.no_of_teens)}
            ${format('幼児：', data.no_of_childs)}`}
          />
          <PullDownMenuItem tag="食事の制限" info={data.diet} />
          <PullDownMenuItem
            tag="代表者"
            info={`${data.represent} / ${data.gender} / ${data.age}歳`}
          />
          <PullDownMenuItem tag="国籍" info={data.country} />
          <PullDownMenuItem tag="連絡先電話番号" info={data.contact_phone} />
          <PullDownMenuItem tag="連絡先メールアドレス" info={data.contact_email} />
          <PullDownMenuItem tag="メモ（希望など）" info={data.note} />
        </PullDownMenu>
      </GuestInfoContainer>
    </Container>
  )
}

export default TourPlanGuestInfo
