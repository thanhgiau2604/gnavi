import { PullDownMeunProps } from 'interfaces/PullDownMenu'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import { PullDownMenuContainer } from './styled'

const PullDownMenu: React.FC<PullDownMeunProps> = ({ hr, title, children }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <PullDownMenuContainer>
      <FlexContainer justifyContent="space-between" margin="4rem auto auto auto">
        <p className="field text--large">{title}</p>
        <ImageContainer
          onClick={() => setShow(!show)}
          className={`icon-${show ? 'expand' : 'collapse'}`}
          width={20}
          height={20}
        >
          <Image src="/icons/circle_arrow.svg" layout="fill" objectFit="contain" />
        </ImageContainer>
      </FlexContainer>
      {hr && <hr />}
      {children}
    </PullDownMenuContainer>
  )
}

export default PullDownMenu
