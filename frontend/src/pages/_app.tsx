import '@/styles/globals.css'
import type { NextPage } from 'next/types'
import type { AppProps } from 'next/app'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
