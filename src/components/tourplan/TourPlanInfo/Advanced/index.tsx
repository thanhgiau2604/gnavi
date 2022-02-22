import React from 'react'
import PullDownMenu from 'components/common/PullDownMenu'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { TourPlanAdvancedInfoContainer } from './styled'

interface Props {
  title: string
  content: string
  transportation: string[]
}

const TourPlanAdvancedInfo: React.FC<Props> = ({ title, content, transportation }) => {
  return (
    <TourPlanAdvancedInfoContainer>
      <PullDownMenu title={title} margin="0">
        <p className="content fm-noto">{content}</p>
        {!!transportation.length && (
          <div className="transportation">
            <h6 className="title">移動手段</h6>
            <FlexContainer>
              {transportation.map((trans: string) => (
                <p key={trans} className="content">
                  {trans}
                </p>
              ))}
            </FlexContainer>
          </div>
        )}
      </PullDownMenu>
    </TourPlanAdvancedInfoContainer>
  )
}

export default TourPlanAdvancedInfo
