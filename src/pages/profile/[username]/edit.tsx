import Head from 'next/head'
import EditProfileContainer from 'containers/Profile/EditProfile'
import { NextApplicationPage } from 'pages/_app'

const EditProfilePage: NextApplicationPage = () => {
  return (
    <>
      <Head>
        <title>Profile edit</title>
      </Head>
      <EditProfileContainer />
    </>
  )
}

export default EditProfilePage
