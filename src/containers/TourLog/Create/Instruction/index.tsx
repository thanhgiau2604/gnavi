import React, { useState } from 'react'
import { FastField, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { BUTTON_COLORS, FIELD_LABEL_WEIGHT, FONT_SIZES, ROUTES } from '@constants'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import Modal from 'components/common/Modal'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer, { FlexItem } from 'styles/styled/layout/FlexLayout'
import { hideModal, showModal } from 'utils/events'
import { TourLogCreateInstructionContainer } from './styled'

const TourLogCreateInstruction: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()

  return (
    <TourLogCreateInstructionContainer>
      <Header title="新規ツアーログの追加" showBtnBack backTo={ROUTES.home} />
      <Container>
        <Button
          title="ツアーログを追加"
          height={48}
          margin="5.7rem auto 5.1rem auto"
          radius={4}
          _fontSize={FONT_SIZES.large}
          onClick={() => router.push(ROUTES.tour_log.create.create_new)}
        />
        <Button
          title="ツアープランをコピーして追加"
          height={48}
          radius={4}
          _fontSize={FONT_SIZES.large}
          onClick={() => showModal(setOpenModal)}
        />
      </Container>
      <Modal
        title="ツアープランをコピーして追加"
        open={openModal}
        onClose={() => hideModal(setOpenModal)}
      >
        <Container padding="0 2rem">
          <Formik
            initialValues={{
              picked: '',
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values)
              resetForm()
              hideModal(setOpenModal)
            }}
          >
            {() => {
              return (
                <Form>
                  <div className="option">
                    <label>
                      <FlexContainer WRAP alignItems="center">
                        <FlexItem flex="1%">
                          <FastField
                            type="radio"
                            name="picked"
                            value="西表・由布・竹富島めぐり日帰りツアー"
                          />
                        </FlexItem>
                        <FlexItem flex="90%">
                          <p>西表・由布・竹富島めぐり日帰りツアー</p>
                        </FlexItem>
                      </FlexContainer>
                    </label>
                  </div>
                  <div className="option">
                    <label>
                      <FlexContainer WRAP alignItems="center">
                        <FlexItem flex="1%">
                          <FastField
                            type="radio"
                            name="picked"
                            value="マンタとウミガメシュノーケリング+幻の島上陸ツアー"
                          />
                        </FlexItem>
                        <FlexItem flex="90%">
                          <p>マンタとウミガメシュノーケリング+幻の島上陸ツアー</p>
                        </FlexItem>
                      </FlexContainer>
                    </label>
                  </div>
                  <div className="option">
                    <label>
                      <FlexContainer WRAP alignItems="center">
                        <FlexItem flex="1%">
                          <FastField
                            type="radio"
                            name="picked"
                            value="マングローブSUP&バラス島上陸"
                          />
                        </FlexItem>
                        <FlexItem flex="90%">
                          <p>マングローブSUP&バラス島上陸</p>
                        </FlexItem>
                      </FlexContainer>
                    </label>
                  </div>
                  <Button
                    title="上記でツアーログを追加"
                    type="submit"
                    buttonColor={BUTTON_COLORS.style02}
                    margin="16.5rem auto 3.4rem auto"
                    _fontSize={FONT_SIZES.large}
                    height={40}
                    radius={4}
                  />
                  <Button
                    title="キャンセル"
                    buttonColor={BUTTON_COLORS.style07}
                    fontWeight={FIELD_LABEL_WEIGHT.normal}
                    margin="0 auto 2.7rem auto"
                    onClick={() => hideModal(setOpenModal)}
                  />
                </Form>
              )
            }}
          </Formik>
        </Container>
      </Modal>
    </TourLogCreateInstructionContainer>
  )
}

export default TourLogCreateInstruction
