import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import isNaN from 'lodash/isNaN'
import ProfileLayout from 'components/layout/ProfileLayout'

interface ProfileHomeProps {
  id: number
}

const ProfileHome = ({ id }: ProfileHomeProps) => {
  const router = useRouter()

  useEffect(() => {
    if (isNaN(id)) {
      router.push('/404')
    }
  }, [id, router])

  return (
    <ProfileLayout userId={id}>
      <p>Tag home</p>
    </ProfileLayout>
  )
}

export default ProfileHome
