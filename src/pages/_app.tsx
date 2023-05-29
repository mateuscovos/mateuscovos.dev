import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '@/styles/theme'

import nextI18NextConfig from '../../next-i18next.config.js'
import { appWithTranslation, UserConfig } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default appWithTranslation(App, nextI18NextConfig as UserConfig)