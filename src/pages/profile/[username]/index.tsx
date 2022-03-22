import Head from 'next/head'
import { useRouter } from 'next/router'
import ProfileHome from 'containers/Profile'
import { NextApplicationPage } from 'pages/_app'

const mockDataTagHome = [
  {
    id: 1,
    type: 'title',
    value_ja: '一緒に特別な思い出を作りましょう!!',
    value_en: `Let's make a special memory together!!`,
  },
  {
    id: 2,
    type: 'content',
    value_ja: `<p>私は東京でフリーのツアープランニングをしています。沖縄出身のうちなーんちゅなので、ガイドブックに載っていない情報やお店の事をお伝えできます! お客様のご要望に合わせてプランを組み立てるので、一緒に特別な思い出を作りましょう!!</p>`,
    value_en: `<p>I am doing free tour planning in Tokyo. I'm from Okinawa, so I can tell you about information and shops that aren't in the guidebook! We will assemble a plan according to your request!</p>`,
  },
  { id: 3, type: 'image', src: 'https://statics.vinpearl.com/diem-du-lich-9_1632662759.jpg' },
]

const mockDataUserProfile = {
  id: 1,
  email: 'hanako_r@okinawa.net',
  password: '345456446356',
  ja_name: '旅行花子',
  status: 'compatible',
  en_name: 'ryoko hanako',
  birthday: new Date(),
  gender: 'female',
  travel_organizations: [
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
  ],
  phone_number: '090-000-0000',
  public_setting_phone_number: 'yourself',
  email_contact: 'hanako_r@okinawa.net',
  public_setting_email_contact: 'yourself',
  background_image: '',
  theme_color: '#343196',
  area: 'okinawa',
}

const ProfilePage: NextApplicationPage = () => {
  const router = useRouter()
  const { username } = router.query

  if (!username) return null

  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <ProfileHome userInfo={mockDataUserProfile} data={mockDataTagHome} />
    </>
  )
}

export default ProfilePage

ProfilePage.requireAuth = true
