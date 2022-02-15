import Button from 'components/common/Button'
import { BUTTON_COLORS, FONT_SIZES } from '@constants'
import { Form } from 'formik'
import React from 'react'
import BasicInfo from 'components/common/Information/BasicInfo'
import History from 'components/common/Information/History'

interface FormInfoProps {
  tab: string
  images?: File[]
  setImages?: (field: string, value: any) => void
}

const FormInfo: React.FC<FormInfoProps> = ({ tab, images, setImages }) => {
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

export default FormInfo
