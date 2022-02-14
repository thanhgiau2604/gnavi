import { BUTTON_UPLOAD_COLORS, CHECKBOX_THEME } from '@constants'
import ButtonUpload from 'components/common/ButtonUpload'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import CustomDate from 'components/common/CustomFields/DateField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import { OptionProps } from 'interfaces/CustomField'
import React, { useEffect, useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import Image from 'next/image'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { BasicInfoContainer } from './styled'

interface Props {
  of: string
  images?: File[]
  setImages?: (field: string, value: any) => void
}

const BasicInfo: React.FC<Props> = ({ of, images, setImages }) => {
  const [thumb, setThumb] = useState<string | ArrayBuffer | undefined>(undefined)
  const orderFormOptions: OptionProps[] = [
    {
      value: '直接',
      label: '直接',
    },
  ]
  useEffect(() => {
    if (!images?.length) return

    const file: any = images[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      if (reader.result) setThumb(reader.result)
    }
    reader.readAsDataURL(file)
  }, [images])

  return (
    <Container padding="0 3rem">
      <BasicInfoContainer>
        <h3 className="title">ツアー情報</h3>
        <FastField
          name="basic_info.tour_name"
          component={CustomInput}
          label="ツアー名（テーマ"
          pb={34}
        />
        <FastField name="basic_info.order_date" component={CustomDate} label="受注日" pb={34} />
        <FastField name="basic_info.start_date" component={CustomDate} label="催行日" pb={34} />
        <FastField name="basic_info.start_time" component={CustomInput} label="催行時間" pb={34} />
        <FastField
          name="overview"
          component={CustomInput}
          label="概要"
          type="text-area"
          height={200}
          pb={34}
        />
        <h3 className="title">依頼元情報</h3>
        <FastField
          name="basic_info.order_form"
          component={CustomSelect}
          label="受注形態"
          options={orderFormOptions}
          pb={34}
        />
        <FastField name="basic_info.company_name" component={CustomInput} label="会社名" pb={34} />
        <FastField name="basic_info.phone" component={CustomInput} label="電話番号" pb={34} />
        <FastField name="basic_info.email" component={CustomInput} label="メールアドレス" pb={34} />
        <FlexContainer alignItems="center">
          <FastField
            name="basic_info.remuneration"
            component={CustomInput}
            label="報酬"
            type="number"
            pb={34}
          />
          <p className="unit unit-currency">円</p>
        </FlexContainer>
        <FlexContainer alignItems="center">
          <FastField
            name="basic_info.price"
            component={CustomInput}
            label="経費"
            type="number"
            pb={34}
          />
          <p className="unit unit-currency">円</p>
        </FlexContainer>
        <FastField name="basic_info.payment_date" component={CustomDate} label="入金日" pb={34} />
        <FastField name="basic_info.method_payment" component={CustomInput} label="支払い方法" />
        {of === 'tour-log' && (
          <>
            <h3 className="title">プロフィールに追加</h3>
            <FastField
              name="basic_info.add_to_profile"
              component={CustomCheckBox}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
              pb={48}
              label="このツアーログをプロフィールの「最近の活動」に追加する"
            />
            <FastField name="basic_info.title" component={CustomInput} label="タイトル" pb={27} />
            <FastField name="basic_info.explanation" component={CustomInput} label="説明" pb={17} />
            {thumb && (
              <ImageContainer width={314} height={236}>
                <Image src={`${thumb}`} alt="images" layout="fill" objectFit="contain" />
              </ImageContainer>
            )}
            <ButtonUpload
              title="画像を選択する"
              margin="2.1rem auto 4.8rem auto"
              buttonUploadColor={BUTTON_UPLOAD_COLORS.style02}
              setImages={setImages}
            />
          </>
        )}
      </BasicInfoContainer>
    </Container>
  )
}

export default BasicInfo
