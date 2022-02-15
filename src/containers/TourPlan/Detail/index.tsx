import React, { useRef, useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { Container } from 'styles/styled/layout/ContainerLayout'
import Header from 'components/common/Header'
import ButtonAction from 'components/tourplan/ActionMenu/ButtonAction'
import ActionMenu from 'components/tourplan/ActionMenu'
import useOnClickOutSide from 'hooks/useOnClickOutSide'
import { TourPlanInfoProps } from 'interfaces/TourPlan'
import { ROUTES, TOUR_PLAN_DETAIL_FAKE_DATA } from '@constants'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import TourPlanInfo from 'components/tourplan/TourPlanInfo'
import { TourPlanDetailContainer } from './styled'

const TourPlanDetail = () => {
  const data: TourPlanInfoProps = TOUR_PLAN_DETAIL_FAKE_DATA
  const [state, setState] = useState<boolean>(false)
  const [isTab, setIsTab] = useState<string>('基本情報')
  const ref = useRef(null)
  useOnClickOutSide(ref, () => setState(false))
  const handleDropdownMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setState(!state)
  }

  return (
    <>
      <Header shadow showBtnBack title={data.basic_info.tour_name} backTo={ROUTES.tour_plan.view} />
      <TourPlanDetailContainer>
        <Container padding="0 2rem">
          <FlexContainer justifyContent="space-between">
            <h3 className="title">{data.basic_info.tour_name}</h3>
            <div ref={ref}>
              <ButtonAction margin="0.8rem 0" onClick={handleDropdownMenu} />
              <ActionMenu state={state} id={data.id} transform="translate(-10%,62%)" />
            </div>
          </FlexContainer>
        </Container>
        <ButtonGroup itemPerRow={3}>
          <ButtonGroupItem
            text="基本情報"
            handleClick={() => setIsTab('基本情報')}
            active={isTab === '基本情報'}
          />
          <ButtonGroupItem
            text="ゲスト情報"
            handleClick={() => setIsTab('ゲスト情報')}
            active={isTab === 'ゲスト情報'}
          />
          <ButtonGroupItem
            text="スポット情報"
            handleClick={() => setIsTab('スポット情報')}
            active={isTab === 'スポット情報'}
          />
        </ButtonGroup>
        <TourPlanInfo tab={isTab} data={data} />
      </TourPlanDetailContainer>
    </>
  )
}

export default TourPlanDetail
