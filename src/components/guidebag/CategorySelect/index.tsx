import React, { useState } from 'react'
import { FieldProps } from 'formik'
import { BUTTON_COLORS } from '@constants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { gbCategoriesActions } from 'app/slices/gbCategoriesSlice'
import Button from 'components/common/Button'
import { FieldLabel } from 'components/common/CustomFields/styled'
import { CategorySelectProps } from 'interfaces/GuideBag'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import ModalCategory from '../ModalCategory'
import { CategorySelectContainer } from './styled'

const CategorySelect: React.FC<FieldProps & CategorySelectProps> = ({ field, label, form }) => {
  const dispatch = useAppDispatch()
  const [isOpenModal, setOpenModal] = useState<boolean>(false)
  const { name, value } = field
  const selected = useAppSelector((state) => state.gbCategories.selected)

  const openModal = () => {
    dispatch(gbCategoriesActions.resetState())
    setOpenModal(true)
  }
  const hideModal = () => setOpenModal(false)

  const changeFormValue = () => {
    form.setFieldValue(name, selected)
    hideModal()
  }

  return (
    <CategorySelectContainer>
      <FieldLabel>
        <label htmlFor={name}>{label}</label>
      </FieldLabel>
      {value ? (
        <div className="category-selected">
          <FlexContainer justifyContent="space-between">
            <p>{value}</p>
            <a onClick={openModal}>選び直す</a>
          </FlexContainer>
        </div>
      ) : (
        <div className="category-not-selected">
          <Button
            title="選択してください"
            buttonColor={BUTTON_COLORS.style08}
            height={48}
            fontWeight={400}
            onClick={openModal}
          />
        </div>
      )}
      <ModalCategory isOpen={isOpenModal} hideModal={hideModal} handleSubmit={changeFormValue} />
    </CategorySelectContainer>
  )
}

export default CategorySelect
