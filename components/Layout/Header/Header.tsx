import styled from "@emotion/styled"
import Image from "next/image"
import logoImage from "../../../assets/logo.png"

import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Image src={logoImage} alt="test" width="48px" height="48px" />
          <Nav>
            <LinkWrapper active={router.pathname === "/"}>
              <Link href="/">Home</Link>
            </LinkWrapper>
            <LinkWrapper active={router.pathname === "/test"}>
              <Link href="/test">Test</Link>
            </LinkWrapper>
            <LinkWrapper active={router.pathname === "/form"}>
              <Link href="/form">login</Link>
            </LinkWrapper>
          </Nav>
        </LeftContainer>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background: white;
  padding: 20px;
`
const Container = styled.div`
  width: 80%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
`
const LeftContainer = styled.div`
  display: flex;
  gap: 15px;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`

const LinkWrapper = styled.span<{ active: boolean }>`
  border-bottom: ${({ active }) => (active ? "2px solid black" : "none")};
`
