import "regenerator-runtime/runtime"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { theme } from "../theme"
import { ThemeProvider } from "@mui/material"
import { BookmarkProvider } from "../context/BookmarkContext"
import { UUIDProvider } from "../context/UUIDContext"

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session} basePath="/api/auth">
      <ThemeProvider theme={theme}>
        <UUIDProvider>
          <BookmarkProvider>
            <Component {...pageProps} />
          </BookmarkProvider>
        </UUIDProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
