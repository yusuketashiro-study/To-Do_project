import type { FC } from 'react'
import { Image, Center, Box } from '@chakra-ui/react'

export const LoadingLayer: FC = () => {
  return (
    <Center height="100vh" bgColor="gray.100">
      <Box position="relative">
        <Image
          width="20rem"
          src="/images/opened-book.png"
          alt="book"
        />
        <Image
          position="absolute"
          top="-5rem"
          right="-2rem"
          src="/images/antenna-loading.svg"
          alt="loading"
        />
      </Box>
    </Center>
  )
}