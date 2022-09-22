import styled from "@emotion/styled"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: white;
`

const Container = styled.div`
  width: 80%;
  max-width: 1080px;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
