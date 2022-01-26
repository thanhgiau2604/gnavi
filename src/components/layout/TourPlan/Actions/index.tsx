import Button from 'components/common/Button'
import { buttonColors } from 'constants/index'
import React from 'react'
import { BoxContainer } from 'styles/styled/layout/BoxLayout'

interface ActionMenuProps {
  id: number | string
  status: boolean
  transform?: string
}

const Actions: React.FC<ActionMenuProps> = ({ id, status, transform }) => {
  const edit = (e: React.MouseEvent<HTMLElement>, ID: number | string) => {
    e.stopPropagation()
    console.log(ID)
  }
  const duplicate = (e: React.MouseEvent<HTMLElement>, ID: number | string) => {
    e.stopPropagation()
    console.log(ID)
  }
  const docs = (e: React.MouseEvent<HTMLElement>, ID: number | string) => {
    e.stopPropagation()
    console.log(ID)
  }
  const remove = (e: React.MouseEvent<HTMLElement>, ID: number | string) => {
    e.stopPropagation()
    console.log(ID)
  }

  return (
    <BoxContainer status={status} transform={transform} padding="1rem">
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => edit(e, id)}
        width={120}
        radius={4}
        margin="0 0 0.8rem 0"
        title="編集する"
        fontWeight={700}
      />
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => duplicate(e, id)}
        width={120}
        radius={4}
        margin="0 0 0.8rem 0"
        title="複製する"
        fontWeight={700}
      />
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => docs(e, id)}
        width={120}
        radius={4}
        margin="0 0 0.8rem 0"
        title="ツアーログ"
        fontWeight={700}
      />
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => remove(e, id)}
        width={120}
        radius={4}
        margin="auto"
        title="削除"
        fontWeight={700}
        buttonColor={buttonColors.STYLE02}
      />
    </BoxContainer>
  )
}

// Actions.defaultProps = {
//   transform: 'translate(0, 24%)',
// }

export default Actions
