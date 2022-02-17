import { BUTTON_COLORS, ROUTES } from '@constants'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import SearchForm from 'components/guidebag/SearchForm'
import { GuideBagLayoutProps } from 'interfaces/GuideBag'
import Link from 'next/link'
import React from 'react'
import { Variables } from 'styles/styled/app/Variables'
import { GuideBagLayoutContainer } from './styled'

const GuideBagLayout: React.FC<GuideBagLayoutProps> = ({
  headerTitle,
  btnBackTitle,
  showSearchForm = false,
  bgColor = Variables.color6,
  children,
}) => {
  return (
    <GuideBagLayoutContainer bgColor={bgColor}>
      <div className="guidebag-layout-main">
        <Header title={headerTitle} btnBackTitle={btnBackTitle} showBtnBack />
        {showSearchForm && (
          <div className="container">
            <SearchForm />
          </div>
        )}
        {children}
      </div>
      <div className="container guidebag-layout-btn-wrapper">
        <div className="guidebag-layout-btn-create">
          <Link href={ROUTES.guide_bag.post_new} passHref>
            <a>
              <Button title="質問する" height={40} buttonColor={BUTTON_COLORS.style01} margin="0" />
            </a>
          </Link>
        </div>
      </div>
    </GuideBagLayoutContainer>
  )
}

export default GuideBagLayout
