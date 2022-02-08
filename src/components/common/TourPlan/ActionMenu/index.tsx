import Button from 'components/common/Button'
import { buttonColors } from 'constants/index'
import React from 'react'
import { BoxContainer } from 'styles/styled/layout/BoxLayout'

interface ActionMenuProps {
  id: number | string
  state: boolean
  transform?: string
}

const ActionMenu: React.FC<ActionMenuProps> = ({ id, state, transform }) => {
  const edit = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    console.log(id)
  }
  const duplicate = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    console.log(id)
  }
  const docs = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    console.log(id)
  }
  const remove = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    console.log(id)
  }

  return (
    <BoxContainer state={state} transform={transform} padding="1rem">
      <Button onClick={edit} width={120} radius={4} margin="0 0 0.8rem 0" title="編集する" />
      <Button onClick={duplicate} width={120} radius={4} margin="0 0 0.8rem 0" title="複製する" />
      <Button onClick={docs} width={120} radius={4} margin="0 0 0.8rem 0" title="ツアーログ" />
      <Button
        onClick={remove}
        width={120}
        radius={4}
        margin="auto"
        title="削除"
        buttonColor={buttonColors.STYLE02}
      />
    </BoxContainer>
  )
}

export default ActionMenu
