import { IDetailInformation, IInfomartion, ISchedule } from 'interfaces/TourInfo'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { TourInfoContainer } from './styled'
import TourInfoAdvanced from './Advanced'
import TourInfoBasic from './Basic'

interface TourInfoProps {
  info: IInfomartion
}

const TourInfo: React.FC<TourInfoProps> = ({ info }) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <TourInfoContainer>
      <FlexContainer justifyContent="space-between">
        <p className="field text--large">{info.field}</p>
        <ImageContainer
          onClick={() => setShow(!show)}
          className={`icon icon-${show ? 'expand' : 'collapse'}`}
          width={20}
          height={20}
        >
          <Image src="/images/circle_arrow.png" layout="fill" objectFit="contain" />
        </ImageContainer>
      </FlexContainer>
      <hr />
      {info.field === 'スケジュール' ? (
        <table className="schedules-table">
          <tbody>
            {!!info?.details[0]?.schedules?.length &&
              info.details[0].schedules.map((schedule: ISchedule, i: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={`${i}`}>
                  <td>
                    <p className="timeline">{schedule.timeline}</p>
                    <div className="circle" />
                  </td>
                  <td>
                    <TourInfoAdvanced
                      title={schedule.title}
                      image={schedule.image}
                      content={schedule.content}
                      transportation={schedule.transportation}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div>
          {info.details &&
            info.details.map((detail: IDetailInformation, i: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <TourInfoBasic key={`${i}`} detail={detail} />
            ))}
        </div>
      )}
    </TourInfoContainer>
  )
}

export default TourInfo
