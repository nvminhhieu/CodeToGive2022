import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { ReactElement } from 'react'

/**
 *
 * @param loadingRender JSX for Loading View Render
 * @param authenticatedRender JSX for Authenticate View Render
 * @returns JSX corresponding based on session.status
 */

export default function useAuthenticate(
  loadingRender: ReactElement | null,
  authenticatedRender: ReactElement | null
): ReactElement | null {
  const session = useSession()

  const handleRender = (): ReactElement | null => {
    switch (session.status) {
      case 'loading':
        return loadingRender
      case 'authenticated':
        return authenticatedRender
      case 'unauthenticated':
        Router.replace('/login')
        return null
      default:
        return null
    }
  }
  return handleRender()
}
