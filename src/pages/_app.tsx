import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  )
}
