import styled from "@emotion/styled"
import Image from "next/image"
import logoImage from "../../../assets/logo.png"

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Image src={logoImage} alt="test" width="48px" height="48px" />
          <Nav>
            <h1>Link1</h1>
            <h2>Link2</h2>
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
  background: red;
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
