import Button from 'components/common/Button'
import { buttonColors } from 'constants/index'
import React from 'react'
import { ActionContainer } from './styled'

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
    <ActionContainer status={status} transform={transform}>
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => edit(e, id)}
        width={120}
        radius={4}
        margin="1rem 1.1rem 0 1.3rem"
        title="編集する"
      />
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => duplicate(e, id)}
        width={120}
        radius={4}
        margin="1rem 1.1rem 0 1.3rem"
        title="複製する"
      />
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => docs(e, id)}
        width={120}
        radius={4}
        margin="1rem 1.1rem 0 1.3rem"
        title="ツアーログ"
      />
      <Button
        onClick={(e: React.MouseEvent<HTMLElement>) => remove(e, id)}
        width={120}
        radius={4}
        margin="1rem 1.1rem 1rem 1.3rem"
        title="削除"
        buttonColor={buttonColors.STYLE02}
      />
    </ActionContainer>
  )
}

Actions.defaultProps = {
  transform: 'translate(0, 24%)',
}

export default Actions
