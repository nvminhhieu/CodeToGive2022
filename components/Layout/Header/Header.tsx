import styled from "@emotion/styled"
import Image from "next/image"
import logoImage from "../../../assets/logo.png"

import NextLink from "next/link"
import { useRouter } from "next/router"
import { ROUTES } from "../../../routing/routes"

const Header = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Image src={logoImage} alt="test" width="48px" height="48px" />
          <Nav>
            <LinkWrapper active={router.pathname === ROUTES.home}>
              <NextLink href={ROUTES.home}>Home</NextLink>
            </LinkWrapper>
            <LinkWrapper active={router.pathname === ROUTES.assessments}>
              <NextLink href={ROUTES.assessments}>Assessments</NextLink>
            </LinkWrapper>
            <LinkWrapper active={router.pathname === ROUTES.login}>
              <NextLink href={ROUTES.login}>Log in</NextLink>
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
  box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 10%);
  z-index: 1;
`
const Container = styled.div`
  width: 80%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
`
const LeftContainer = styled.div`
  display: flex;
  gap: 28px;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
`

const LinkWrapper = styled.span<{ active: boolean }>`
  color: ${({ active }) => (active ? "#FF5000" : "#0068FF")};
  font-weight: 600;
`
