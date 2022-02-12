import React, { useRef, useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Link from 'next/link'
import useOnClickOutSide from 'hooks/useOnClickOutSide'
import ButtonAction from 'components/common/TourPlan/ActionMenu/ButtonAction'
import ActionMenu from 'components/common/TourPlan/ActionMenu'
import { ROUTES } from '@constants'
import { TourPlanItemProps } from 'interfaces/TourPlan'
import { TourPlanItemContainer } from './styled'

const TourPlanItem: React.FC<TourPlanItemProps> = ({ id, title, content }) => {
  const [state, setState] = useState<boolean>(false)
  const ref = useRef(null)
  useOnClickOutSide(ref, () => setState(false))
  const handleDropdownMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setState(!state)
  }

  return (
    <Link href={`${ROUTES.tour_plan.detail}${id}`} passHref>
      <TourPlanItemContainer ref={ref}>
        <FlexContainer position="relative" justifyContent="space-between">
          <p className="title">{title}</p>
          <ButtonAction margin="1.9rem 0 0 0" onClick={handleDropdownMenu} />
        </FlexContainer>
        <p className="content">{content}</p>
        <ActionMenu state={state} id={id} />
      </TourPlanItemContainer>
    </Link>
  )
}

export default TourPlanItem
