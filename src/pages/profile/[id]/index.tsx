import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import toNumber from 'lodash/toNumber'
import ProfileHome from 'containers/Profile'

const res = [
  { type: 'title', value: '一緒に特別な思い出を作りましょう!!' },
  {
    type: 'content',
    value: `<p>私は東京でフリーのツアープランニングをしています。沖縄出身のうちなーんちゅなので、ガイドブックに載っていない情報やお店の事をお伝えできます！お客様のご要望に合わせてプランを組み立てるので、一緒に特別な思い出を作りましょう！！</p>`,
  },
  { type: 'image', value: 'https://statics.vinpearl.com/diem-du-lich-9_1632662759.jpg' },
]

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return <p>Loading...</p>

  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <ProfileHome id={toNumber(id)} res={res} />
    </>
  )
}

export default ProfilePage
