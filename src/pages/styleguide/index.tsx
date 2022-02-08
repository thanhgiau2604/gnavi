import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import {
  buttonColors,
  buttonHeartThemes,
  buttonLikeThemes,
  buttonUploadColors,
  fontSize,
} from 'constants/index'
import Button from 'components/common/Button'
import ButtonUpload from 'components/common/ButtonUpload'
import Avatar from 'components/common/Avatar'
import RadarChart from 'components/common/RadarChart'
import { ChartContainer } from 'styles/styled/layout/ChartLayout'
import Modal from 'components/common/Modal'
import Header from 'components/common/Header'
import ButtonReaction from 'components/common/ButtonReaction'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import FormInput from './FormInput'

const StyleGuide = () => {
  const indicators = [8, 6, 10, 7, 9]

  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const showModal = () => setOpenModal(true)
  const hideModal = () => setOpenModal(false)

  const [isActive, setIsActive] = React.useState<number>(1)
  return (
    <div className="container">
      <Header shadow />
      <Header showBtnBack title="ガイドの知恵袋" backTo="/login" />
      <Button width={200} buttonColor={buttonColors.STYLE02} title="上記内容で質問する" />
      <Button width={320} buttonColor={buttonColors.STYLE03} title="上記内容で質問する" />
      <Button width="90%" buttonColor={buttonColors.STYLE04} title="編集する" />
      <Button title="上記内容で質問する" />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE01}
        _fontSize={fontSize.SMALL}
        fontWeight={400}
        title="画像を選択する"
      />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE02}
        _fontSize={fontSize.MEDIUM}
        fontWeight={400}
        title="画像を選択する"
      />
      <FlexContainer spacing={3} margin="10px 0" justifyContent="center">
        <Avatar src="/images/profile_2.png" alt="avatar1" size="small" />
        <Avatar src="" alt="no avatar" />
        <Avatar src="/images/profile_2.png" alt="avatarw" size="large" />
      </FlexContainer>
      <ChartContainer>
        <p className="title">2021/11/06 18:24</p>
        <RadarChart indicators={indicators} />
        <h5 className="note">自身の強 みや今後伸ばしていける部分を把握しましょう。</h5>
      </ChartContainer>
      <FlexContainer justifyContent="center" margin="20px 0">
        <button type="button" onClick={showModal}>
          Open modal
        </button>
      </FlexContainer>
      {openModal && (
        <Modal open={openModal} title="テーマから探す" onBack={hideModal} onClose={hideModal}>
          <h1>children</h1>
        </Modal>
      )}
      <FormInput />
      <FlexContainer justifyContent="space-between" margin="20px 0">
        <ButtonReaction theme={buttonLikeThemes.THEME01} id={1} />
        <ButtonReaction theme={buttonLikeThemes.THEME02} id={2} />
        <ButtonReaction theme={buttonHeartThemes.THEME01} id={3} />
      </FlexContainer>

      <ButtonGroup itemPerRow={3}>
        <ButtonGroupItem handleClick={() => setIsActive(1)} active={isActive === 1} text="ホーム" />
        <ButtonGroupItem
          handleClick={() => setIsActive(2)}
          active={isActive === 2}
          text="案内できる観光地"
        />
        <ButtonGroupItem handleClick={() => setIsActive(3)} active={isActive === 3} text="スキル" />
        <ButtonGroupItem
          handleClick={() => setIsActive(4)}
          active={isActive === 4}
          text="最近の活動"
        />
        <ButtonGroupItem
          handleClick={() => setIsActive(5)}
          active={isActive === 5}
          text="対応可能ツアー"
        />
        <ButtonGroupItem
          handleClick={() => setIsActive(6)}
          active={isActive === 6}
          text="写真ギャラリー"
        />
      </ButtonGroup>
    </div>
  )
}

export default StyleGuide
