import React, { useRef, useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ImageContainer } from 'styles/styled/app/Image'
import { TourLogProps } from 'interfaces/TourLog'
import useOnClickOutSide from 'hooks/useOnClickOutSide'
import ButtonAction from 'components/common/TourPlan/ActionMenu/ButtonAction'
import ActionMenu from 'components/common/TourPlan/ActionMenu'
import ButtonReaction from 'components/common/ButtonReaction'
import { buttonLikeThemes } from 'constants/index'
import { TourLogContainer } from './styled'

interface Props {
  data: TourLogProps
}

const TourLog: React.FC<Props> = ({ data }) => {
  const [state, setState] = useState<boolean>(false)
  const ref = useRef(null)
  useOnClickOutSide(ref, () => setState(false))
  const myLoader = ({ src }: any) => {
    return `${src}?w=100&q=75`
  }
  const handleDropdownMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setState(!state)
    // call reaction api...
  }

  return (
    <Link href={`/tourplan/detail?id=${data.id}`} passHref>
      <TourLogContainer ref={ref}>
        <FlexContainer position="relative" justifyContent="space-between">
          <p className="title">{data.title}</p>
          <ButtonAction margin="3.1rem 1.5rem 4rem auto" onClick={handleDropdownMenu} />
        </FlexContainer>
        {!!data?.images?.length && (
          <ImageContainer width="100%" height={250} margin="1.1rem auto 2rem auto">
            <Image
              loader={myLoader}
              src={data.images[0]}
              alt="image"
              layout="fill"
              objectFit="contain"
              priority
            />
          </ImageContainer>
        )}
        <p className="content">{data.content}</p>
        <ButtonReaction
          theme={buttonLikeThemes.THEME01}
          id={data.id}
          position="relative"
          bottom="0"
          right="0"
          margin="0 0 0 auto"
          transform="translate(-70%, -50%)"
          padding="0 0 0.5rem 0"
        />
        <ActionMenu state={state} id={data.id} />
      </TourLogContainer>
    </Link>
  )
}

export default TourLog
