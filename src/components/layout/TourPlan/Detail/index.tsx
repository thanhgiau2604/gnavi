import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { Detail, ITourPlanDetail } from 'interfaces/TourPlan/Detail'
import { TourPlanDetailContainer } from './styled'
import TourPlanDetailBlock from './Block'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface TourPlanDetailProps {
  data: ITourPlanDetail
}

const TourPlanDetail: React.FC<TourPlanDetailProps> = ({ data }) => {
  const { title, images, details } = data
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <TourPlanDetailContainer>
      <h3 className="title">{title}</h3>
      <div className="slider">
        <Slider {...settings}>
          {images &&
            images.map((image: string, i: number) => (
              <ImageContainer key={i} width="100%" height={230}>
                <Image src={image} alt="" layout="fill" objectFit="fill" priority />
              </ImageContainer>
            ))}
        </Slider>
        <div className="image-box">
          <FlexContainer justifyContent="space-between">
            <ImageContainer className="icon icon-camera" width={20} height={18}>
              <Image src="/images/camera.png" alt="" layout="fill" objectFit="fill" priority />
            </ImageContainer>
            <p className="counter">{images && `(${images.length})`}</p>
          </FlexContainer>
        </div>
      </div>
      {details &&
        details.map((detail: Detail, i: number) => (
          <TourPlanDetailBlock key={i} field={detail.field} content={detail.content} />
        ))}
    </TourPlanDetailContainer>
  )
}

export default TourPlanDetail
