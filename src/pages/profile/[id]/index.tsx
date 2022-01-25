import type { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import toNumber from 'lodash/toNumber'

import Header from 'components/common/Header'

import ProfileHome from 'containers/profile'

interface ProfilePageProps {
  idUser: number
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const data: ProfilePageProps = { idUser: toNumber(id) }
  return {
    props: data,
  }
}

const ProfilePage: NextPage = ({
  idUser,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <Header showBtnBack title="ページ編集" />
      <ProfileHome id={toNumber(idUser)} />
    </>
  )
}

export default ProfilePage
