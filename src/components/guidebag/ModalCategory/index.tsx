import React from 'react'
import { BUTTON_COLORS } from '@constants'
import Button from 'components/common/Button'
import Modal from 'components/common/Modal'
import { useAppSelector } from 'app/hooks'
import Category from '../Category'
import { ModalCategoryContainer } from './styled'

interface ModalCategoryProps {
  isOpen: boolean
  hideModal: () => void
  handleSubmit: () => void
}

const ModalCategory: React.FC<ModalCategoryProps> = ({ isOpen, hideModal, handleSubmit }) => {
  const isLast = useAppSelector((state) => state.gbCategories.isLast)
  return (
    <ModalCategoryContainer>
      <Modal open={isOpen} title="カテゴリを選択" onBack={hideModal} onClose={hideModal}>
        <Category />
        <div className="category-selection-footer">
          <div className="container">
            {isLast && (
              <Button
                title="上記内容で質問する"
                buttonColor={BUTTON_COLORS.style01}
                height={40}
                margin="3.6rem 0 0"
                onClick={handleSubmit}
              />
            )}
            <a className="category-selection-cancel" onClick={hideModal}>
              キャンセル
            </a>
          </div>
        </div>
      </Modal>
    </ModalCategoryContainer>
  )
}

export default ModalCategory
