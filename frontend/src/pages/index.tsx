import { NextPage } from 'next/types'
import { Center, Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Image, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const Home: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' })

  return (
    <Center bgColor="green.400" minW="full" minH="100vh">
      <Box width="sm" borderRadius="base" bgColor="white" shadow="base" py="10" px="8">
        <form onSubmit={handleSubmit(() => window.alert('submit!'))}>
          <Center flexDirection="column">
            <VStack w="full" spacing="5">
              <Button colorScheme="black" variant="outline" size="lg" px="4">
                <Image src='/images/google-logo.png' alt="google icon" w="9" mr="2" />
                <Text fontSize="sm" letterSpacing="wide">LOGIN with Google Account</Text>
              </Button>
              <Text>or</Text>
              <FormControl isInvalid={errors.id}>
                <FormLabel>ID</FormLabel>
                <Input
                  type="text"
                  {...register('id', { required: true })}
                />
                <FormErrorMessage>{errors.id && 'IDを入力してください'}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  {...register('password', { required: true })}
                />
                <FormErrorMessage>{errors.password && 'メールアドレスを入力してください'}</FormErrorMessage>
              </FormControl>
              <Box w="full" px="4">
                <Button type="submit" isFullWidth color="white" bg="orange.300" py="6" mb="2.5" _hover={{ bg: 'orange.400' }} _active={{ bg: 'orange.400' }}>
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
