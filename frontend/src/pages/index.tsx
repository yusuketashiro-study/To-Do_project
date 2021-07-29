import { useUserInfo } from '@/hooks/useUserInfo'

import { Center, Heading } from '@chakra-ui/react'

import type { NextPage } from 'next/types'

const Home: NextPage = () => {
  const { loginUser } = useUserInfo()

  return (
    <Center minH="inherit">
      <Heading>ユーザー：{ loginUser?.id }</Heading>
    </Center>
  )
}

export default Home
