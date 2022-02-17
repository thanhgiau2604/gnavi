import { BUTTON_COLORS } from '@constants'
import Button from 'components/common/Button'
import { FieldLabel } from 'components/common/CustomFields/styled'
import Modal from 'components/common/Modal'
import { FieldProps } from 'formik'
import { CategorySelectProps } from 'interfaces/GuideBag'
import React, { useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Category from '../Category'
import { CategorySelectContainer } from './styled'

const CategorySelect: React.FC<FieldProps & CategorySelectProps> = ({
  field,
  label,
  categories,
}) => {
  const [openSelection, setOpenSelection] = useState<boolean>(false)
  const showSelection = () => setOpenSelection(true)
  const hideSelection = () => setOpenSelection(false)
  const { name, value } = field

  return (
    <CategorySelectContainer>
      <FieldLabel>
        <label htmlFor={name}>{label}</label>
      </FieldLabel>
      {value ? (
        <div className="category-selected">
          <FlexContainer justifyContent="space-between">
            <p>{value}</p>
            <a onClick={showSelection}>選び直す</a>
          </FlexContainer>
        </div>
      ) : (
        <div className="category-not-selected">
          <Button
            title="選択してください"
            buttonColor={BUTTON_COLORS.style07}
            height={48}
            fontWeight={400}
            onClick={showSelection}
          />
        </div>
      )}
      <Modal
        open={openSelection}
        title="カテゴリを選択"
        onBack={hideSelection}
        onClose={hideSelection}
      >
        <Category categoryList={categories} updateCategoryList={() => []} />
        <div className="category-selection-footer">
          <div className="container">
            <Button
              title="上記内容で質問する"
              buttonColor={BUTTON_COLORS.style01}
              height={40}
              margin="3.6rem 0 5rem 0"
            />
            <a className="category-selection-cancel" onClick={hideSelection}>
              キャンセル
            </a>
          </div>
        </div>
      </Modal>
    </CategorySelectContainer>
  )
}

export default CategorySelect
