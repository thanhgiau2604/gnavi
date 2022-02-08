import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { buttonColors, routes } from 'constants/index'
import { SkillCheckProps } from 'constants/skill_check'
import Image from 'next/image'
import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { TestInfoSection } from './styled'

const TestInfo: React.FC<SkillCheckProps> = ({ updateShowTestForm }) => {
  return (
    <TestInfoSection>
      <Header showBtnBack title="スキルチェック" backTo={routes.SKILL_INSTRUCTION} />
      <div className="container">
        <div className="test-info-main">
          <h3>
            既に実践していることや、今後伸ばすことのできる領域を見極めるために、セ
            ルフチェックシートを用いて自身のガイドスキルを三段階で評価しましょう。
          </h3>

          <div className="test-info-three-points">
            <FlexContainer justifyContent="between" alignItems="center">
              <ImageContainer className="test-info-icon" width={20} height={23}>
                <Image src="/icons/circle_icon.svg" alt="" layout="fill" objectFit="contain" />
              </ImageContainer>
              <p className="test-info-point-detail">
                ツアーを実施する際には必ず取り組んでおり、どのような場合であっても実践している。
              </p>
            </FlexContainer>

            <FlexContainer justifyContent="between" alignItems="center" margin="2rem 0 0">
              <ImageContainer className="test-info-icon" width={18.5} height={26}>
                <Image src="/icons/square_icon.svg" alt="" layout="fill" objectFit="contain" />
              </ImageContainer>
              <p className="test-info-point-detail">
                ツアーを実施する際に意識はしているが、実際に行動に移せるときとそうでない時がある。
              </p>
            </FlexContainer>

            <FlexContainer justifyContent="between" alignItems="center" margin="2rem 0 0">
              <ImageContainer className="test-info-icon" width={18} height={18}>
                <Image src="/icons/times_icon.svg" alt="" layout="fill" objectFit="contain" />
              </ImageContainer>
              <p className="test-info-point-detail">
                これまで意識したことがない、もしくは意識したけれど実践で行動に移
                すことができなかった。
              </p>
            </FlexContainer>
          </div>
          <Button
            title="チェックスタート"
            buttonColor={buttonColors.STYLE01}
            margin="3.6rem 0 2rem 0"
            height={48}
            onClick={() => updateShowTestForm(true)}
          />
        </div>
      </div>
    </TestInfoSection>
  )
}

export default TestInfo
