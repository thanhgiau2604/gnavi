import React from 'react'
import { Form } from 'formik'
import { BUTTON_COLORS, FONT_SIZES } from '@constants'
import Button from 'components/common/Button'
import BasicInfo from 'components/information/BasicInfo'
import History from 'components/information/History'

interface TourLogFormInfoProps {
  tab: string
  images?: File[]
  setImages?: (field: string, value: any) => void
}

const TourLogFormInfo: React.FC<TourLogFormInfoProps> = ({ tab, images, setImages }) => {
  return (
    <Form>
      {tab === '基本情報' && <BasicInfo of="tour-log" images={images} setImages={setImages} />}
      {tab === '振り返り' && <History />}
      <div className="btn-submit">
        <Button
          title="保存する"
          type="submit"
          buttonColor={BUTTON_COLORS.style02}
          height={40}
          margin="0.8rem auto"
          _fontSize={FONT_SIZES.large}
        />
      </div>
    </Form>
  )
}

export default TourLogFormInfo
