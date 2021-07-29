import { useState, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'

import { Center, Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Image, Text, VStack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from "react-icons/fa"

import type { NextPage } from 'next/types'
import type { ChangeEvent } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' })
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' })
  const handleChange =  useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo(preLoginInfo => ({ ...preLoginInfo, [e.target.name]: e.target.value }))
  }, [])

  const router = useRouter()
  useEffect(() => {
    router.prefetch('/')
  }, [router])
  const { loading, login } = useAuth()

  return (
    <Center minH="inherit" position="relative" overflow="hidden">
      <Box position="absolute" top="0" left="0" w="100vw" h="100vh" bgColor="green.400" />
      <Box position="absolute" top="0" left="0" w="100vw" h="100vh" bgColor="gray.100" transform="rotate(37.5deg)" transformOrigin="left top" />
      <Image src="/images/login-image.svg" alt="bookshelf" position="absolute" left="2rem" bottom="2rem" w="30%" pointerEvents="none" />

      <Box position="relative" width="sm" borderRadius="base" bgColor="white" boxShadow="xl" py="10" px="8">
        <form>
          <Center flexDirection="column">
            <VStack w="full" spacing="5">
              <Button colorScheme="black" variant="outline" size="lg" px="4">
                <Image src='/images/google-logo.png' alt="google icon" w="9" mr="2" />
                <Text fontSize="sm" letterSpacing="wide">LOGIN with Google Account</Text>
              </Button>
              <Text>or</Text>
              <FormControl id="id" isInvalid={errors.id}>
                <FormLabel>ID</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                  >
                    <FaUserAlt />
                  </InputLeftElement>
                  <Input
                    type="text"
                    {...register('id', { required: true })}
                    onChange={handleChange}
                  />
                </InputGroup>
                <FormErrorMessage>IDを入力してください</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                  >
                    <FaLock />
                  </InputLeftElement>
                  <Input
                    type="password"
                    {...register('password', { required: true })}
                    onChange={handleChange}
                  />
                </InputGroup>
                <FormErrorMessage>メールアドレスを入力してください</FormErrorMessage>
              </FormControl>
              <Box w="full" px="4">
                <Button
                  isLoading={loading}
                  type="button"
                  isFullWidth
                  color="white"
                  bg="orange.300"
                  py="6"
                  mb="2.5"
                  _hover={{ bg: 'orange.400' }}
                  _active={{ bg: 'orange.400' }}
                  onClick={handleSubmit(() => login(loginInfo))}
                >
                  <Text fontSize="xl" letterSpacing="wide">LOGIN</Text>
                </Button>
                <Text fontSize="sm" color="cyan.400">新規登録</Text>
              </Box>
            </VStack>
          </Center>
        </form>
      </Box>
    </Center>
  )
}

export default Home
