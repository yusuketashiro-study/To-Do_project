import NoSSR from '@/providers/NoSSR'

import { AuthProvider } from '@/providers/AuthProvider'
import { ChakraProvider, CSSReset, Container } from '@chakra-ui/react'

import type { FC } from 'react'

export const Providers: FC = ({ children }) => {
  return (
    <NoSSR>
      <ChakraProvider>
        <CSSReset />
        <AuthProvider>
          <Container maxW="full" bgColor="gray.100">
            {children}
          </Container>
        </AuthProvider>
      </ChakraProvider>
    </NoSSR>
  )
}
