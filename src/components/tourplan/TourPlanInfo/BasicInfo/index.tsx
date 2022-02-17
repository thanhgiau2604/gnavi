import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { BasicInfoProps } from 'interfaces/TourPlan'
import { formatDateTime } from 'utils/helper'
import { DATETIME_FORMAT } from '@constants'
import { BasicInfoContainer } from './styled'

interface Props {
  data: BasicInfoProps
}

const TourPlanInfoBasic: React.FC<Props> = ({ data }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <Container padding="0 2rem">
      <BasicInfoContainer>
        <FlexContainer justifyContent="space-between" margin="4rem auto auto auto">
          <p className="field text--large">ツアー情報</p>
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
        <p className="tag">受注日</p>
        <p className="information">{formatDateTime(data.order_date, DATETIME_FORMAT.template01)}</p>
        <p className="tag">催行日時</p>
        <p className="information">{`${formatDateTime(
          data.start_date,
          DATETIME_FORMAT.template01
        )} ${data.start_time}`}</p>
        <p className="tag">概要</p>
        <p className="information">{data.overview}</p>

        <FlexContainer justifyContent="space-between" margin="4rem auto auto auto">
          <p className="field text--large">依頼元情報</p>
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
        <p className="tag">受注形態</p>
        <p className="information">{data.order_form}</p>
        <p className="tag">会社名</p>
        <p className="information">{data.company_name}</p>
        <p className="tag">電話番号</p>
        <p className="information">{data.phone}</p>
        <p className="tag">メールアドレス</p>
        <p className="information">{data.email}</p>
        <p className="tag">報酬</p>
        <p className="information">{data.remuneration}</p>
        <p className="tag">経費</p>
        <p className="information">{data.price}</p>
        <p className="tag">入金日</p>
        <p className="information">
          {formatDateTime(data.payment_date, DATETIME_FORMAT.template01)}
        </p>
        <p className="tag">支払い方法</p>
        <p className="information">{data.method_payment}</p>
      </BasicInfoContainer>
    </Container>
  )
}

export default TourPlanInfoBasic
