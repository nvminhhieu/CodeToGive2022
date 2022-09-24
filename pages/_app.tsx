import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { theme } from "../theme"
import { ThemeProvider } from "@mui/material"

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session} basePath="/client/api/auth">
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
