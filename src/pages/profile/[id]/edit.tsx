import type { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import toNumber from 'lodash/toNumber'
import EditProfileContainer from 'containers/Profile/EditProfile'

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

const EditProfilePage: NextPage = ({
  idUser,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <EditProfileContainer id={toNumber(idUser)} />
    </>
  )
}

export default EditProfilePage
