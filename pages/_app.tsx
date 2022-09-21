import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session} basePath="/client/api/auth">
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
