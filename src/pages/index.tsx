import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Box, Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'

import nextI18NextConfig from '../../next-i18next.config.js'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { UserConfig } from 'next-i18next'
import { Career } from '@/components/career'

export default function Home() {
  return (
    <>
      <Head>
        <title>mateuscovos</title>
        <meta name="description" content="I'm a passionate full stack software developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" minHeight="100vh">
        <Box flex="1">
          <Container maxW="1024px">
            <Header />
            <About />
            <Career />
          </Container>
        </Box>
        <Box mt="auto">
          <Footer />
        </Box>
      </Flex>
    </>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common'],
      nextI18NextConfig as UserConfig
    )),
  },
})