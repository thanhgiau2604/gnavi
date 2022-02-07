import React, { useRef, useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Link from 'next/link'
import { TourLogProps } from 'interfaces/TourLog'
import useOnClickOutSide from 'hooks/useOnClickOutSide'
import ButtonAction from 'components/common/TourPlan/ActionMenu/ButtonAction'
import ActionMenu from 'components/common/TourPlan/ActionMenu'
import { TourLogContainer } from './styled'

interface Props {
  data: TourLogProps
}

const TourLog: React.FC<Props> = ({ data }) => {
  const [state, setState] = useState<boolean>(false)
  const ref = useRef(null)
  useOnClickOutSide(ref, () => setState(false))
  const handleDropdownMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setState(!state)
    // call actions api...
  }

  return (
    <Link href={`/tourplan/detail?id=${data.id}`} passHref>
      <TourLogContainer ref={ref}>
        <FlexContainer position="relative" justifyContent="space-between">
          <p className="title">{data.title}</p>
          <ButtonAction margin="1.9rem 0 0 0" onClick={handleDropdownMenu} />
        </FlexContainer>
        <p className="content">{data.content}</p>
        <ActionMenu state={state} id={data.id} />
      </TourLogContainer>
    </Link>
  )
}

export default TourLog
