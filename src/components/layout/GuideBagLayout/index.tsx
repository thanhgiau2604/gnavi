import { BUTTON_COLORS, ROUTES } from '@constants'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import SearchForm from 'components/guide_bag/SearchForm'
import { GuideBagLayoutProps } from 'interfaces/GuideBag'
import Link from 'next/link'
import React from 'react'
import { GuideBagLayoutContainer } from './styled'

const GuideBagLayout: React.FC<GuideBagLayoutProps> = ({
  headerTitle,
  btnBackTitle,
  showSearchForm,
  children,
}) => {
  return (
    <GuideBagLayoutContainer>
      <div className="guidebag-layout-main">
        <Header title={headerTitle} btnBackTitle={btnBackTitle} showBtnBack />
        {showSearchForm && (
          <div className="container">
            <SearchForm />
          </div>
        )}
        {children}
      </div>
      <div className="container">
        <div className="guidebag-layout-btn-create">
          <Link href={ROUTES.new_post} passHref>
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
