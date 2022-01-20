import React from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { buttonColors, buttonUploadColors, fontSize } from 'constants/index'
import Button from 'components/common/Button'
import ButtonUpload from 'components/common/ButtonUpload'
import Avatar from 'components/common/Avatar'
import RadarChart from 'components/common/RadarChart'
import { ChartContainer } from 'styles/styled/layout/ChartLayout'

const StyleGuide = () => {
  const indicators = [8, 6, 10, 7, 9]
  return (
    <div className="wrapper">
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE01}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE02}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE03}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE04}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE01}
        fontSize={fontSize.SMALL}
        fontWeight={400}
        title="画像を選択する"
      />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE02}
        fontSize={fontSize.SMALL}
        fontWeight={400}
        title="画像を選択する"
      />
      <FlexContainer spacing={3} margin="10px 0">
        <Avatar src="/images/profile_2.png" alt="avatar1" size="small" />
        <Avatar src="" alt="no avatar" />
        <Avatar src="/images/profile_2.png" alt="avatarw" size="large" />
      </FlexContainer>
      <ChartContainer>
        <p className="title">2021/11/06 18:24</p>
        <RadarChart indicators={indicators} />
        <h5 className="note">自身の強 みや今後伸ばしていける部分を把握しましょう。</h5>
      </ChartContainer>
    </div>
  )
}

export default StyleGuide
