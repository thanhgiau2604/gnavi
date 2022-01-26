import React, { useRef, useState } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ImageContainer } from 'styles/styled/app/Image'
import { ITourLog } from 'interfaces/TourPlan/TourLog'
import useOnClickOutSide from 'constants/utils'
import ButtonAction from 'components/common/TourPlan/ActionMenu/ButtonAction'
import ActionMenu from 'components/common/TourPlan/ActionMenu'
import { TourLogContainer } from './styled'

interface TourLogProps {
  tourLog: ITourLog
}

const TourLog: React.FC<TourLogProps> = ({ tourLog }) => {
  const [status, setStatus] = useState<boolean>(false)
  const ref = useRef(null)
  useOnClickOutSide(ref, () => setStatus(false))
  const myLoader = ({ src }: any) => {
    return `${src}?w=100&q=75`
  }

  return (
    <Link href={`/tourplan/detail?id=${tourLog.id}`} passHref>
      <TourLogContainer ref={ref}>
        <FlexContainer position="relative" justifyContent="space-between">
          <p className="title">{tourLog.title}</p>
          <ButtonAction state={status} setState={setStatus} margin="3.1rem 1.5rem 4rem auto" />
        </FlexContainer>
        {!!tourLog.images.length && (
          <ImageContainer width="100%" height={200} margin="1.1rem auto 2rem auto">
            <Image
              loader={myLoader}
              src={tourLog.images[0]}
              alt="image"
              layout="fill"
              objectFit="fill"
              priority
            />
          </ImageContainer>
        )}
        <p className="content">{tourLog.content}</p>
        {/* Will replace soon */}
        <div className="btn btn-icon">
          <Image src="/images/like.png" layout="fill" objectFit="contain" />
        </div>
        <ActionMenu status={status} id={tourLog.id} />
      </TourLogContainer>
    </Link>
  )
}

export default TourLog
