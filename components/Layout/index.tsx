import React, { ReactNode } from "react"
import Header from "./Header/Header"
import Main from "./Main/Main"

type Props = {
  children: ReactNode
}

/**
 * Provide a children React to use this component. Use at pages
 * @example
 * <Layout>
 *  <Component1/>
 *  <div></div>
 *  ...
 * </Layout>
 */

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
