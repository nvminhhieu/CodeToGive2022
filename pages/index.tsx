import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useUUIDContext } from "../context/UUIDContext"
import styled from "@emotion/styled"
import CustomButton from "../components/common/CustomButton/CustomButton"

const Home: NextPage = () => {
  const router = useRouter()
  const { UUID } = useUUIDContext()
  return (
    <Container>
      <CustomButton
        onClick={() => {
          router.push(`${UUID}`)
        }}
        variant="contained"
      >
        General Assessments
      </CustomButton>
      <CustomButton
        onClick={() => {
          router.push(`/admin`)
        }}
        variant="outlined"
      >
        Create custom Assessments (Admin)
      </CustomButton>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
