import { NextPage } from 'next/types'
import { Center, Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Img, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const Home: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' })

  return (
    <h1>Home</h1>
  )
}

export default Home
