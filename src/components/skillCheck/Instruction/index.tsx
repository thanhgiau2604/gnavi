import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { BUTTON_COLORS, ROUTES } from '@constants'
import { useRouter } from 'next/router'
import React from 'react'
import { TestInstructionSection } from './styled'

const TestInstruction = () => {
  const router = useRouter()
  return (
    <TestInstructionSection>
      <Header showBtnBack title="スキルチェック" />
      <div className="container">
        <div className="test-instruction-main">
          <p>
            それぞれのスキルセットにおいて定義されている具体的な行動基準を、自身の行動と照らし合わせて、スキルチェックに活用することができます。
            <br />
            <br />
            また、自身の強みや強化すべき領域・スキルセットを把握し、学習計画の立案などに活かすこともできます。
          </p>
          <Button
            title="スキルチェックをはじめる"
            buttonColor={BUTTON_COLORS.style01}
            margin="3.6rem 0 0 0"
            height={48}
            onClick={() => router.push(ROUTES.skill_check)}
          />
          <Button
            title="前回の結果"
            buttonColor={BUTTON_COLORS.style03}
            margin="3.7rem 0 2rem 0"
            height={48}
          />
        </div>
      </div>
    </TestInstructionSection>
  )
}

export default TestInstruction
