import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { BasicInfoProps } from 'interfaces/TourPlan'
import { formatDateTime } from 'utils/helper'
import { DATETIME_FORMAT } from '@constants'
import PullDownMenu from 'components/common/PullDownMenu'
import PullDownMenuItem from 'components/common/PullDownMenu/PullDownMenuItem'
import { BasicInfoContainer } from './styled'

interface Props {
  data: BasicInfoProps
}

const TourPlanInfoBasic: React.FC<Props> = ({ data }) => {
  return (
    <Container padding="0 2rem">
      <BasicInfoContainer>
        <PullDownMenu title="ツアー情報" hr>
          <PullDownMenuItem
            tag="受注日"
            info={formatDateTime(data.order_date, DATETIME_FORMAT.template01)}
          />
          <PullDownMenuItem
            tag="催行日時"
            info={`${formatDateTime(data.start_date, DATETIME_FORMAT.template01)} ${
              data.start_time
            }`}
          />
          <PullDownMenuItem tag="概要" info={data.overview} />
        </PullDownMenu>
        <PullDownMenu title="依頼元情報" hr>
          <PullDownMenuItem tag="受注形態" info={data.order_form} />
          <PullDownMenuItem tag="会社名" info={data.company_name} />
          <PullDownMenuItem tag="電話番号" info={data.phone} />
          <PullDownMenuItem tag="メールアドレス" info={data.email} />
          <PullDownMenuItem tag="報酬" info={data.remuneration} />
          <PullDownMenuItem tag="経費" info={data.price} />
          <PullDownMenuItem
            tag="入金日"
            info={formatDateTime(data.payment_date, DATETIME_FORMAT.template01)}
          />
          <PullDownMenuItem tag="支払い方法" info={data.method_payment} />
        </PullDownMenu>
      </BasicInfoContainer>
    </Container>
  )
}

export default TourPlanInfoBasic
