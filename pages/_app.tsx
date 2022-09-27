import "regenerator-runtime/runtime"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { theme } from "../theme"
import { ThemeProvider } from "@mui/material"
import { BookmarkProvider } from "../context/BookmarkContext"

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session} basePath="/client/api/auth">
      <ThemeProvider theme={theme}>
        <BookmarkProvider>
          <Component {...pageProps} />
        </BookmarkProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
