import Layout from "../../components/Layout"
import useAuthenticate from "../../hooks/useAuthenticate"
import PageTitle from "../../components/common/PageTitle"
import Link from "next/link"
import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import CustomButton from "../../components/common/CustomButton/CustomButton"
import { useRouter } from "next/router"

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Card = styled.div`
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px;
`

const Title = styled.h2``

const Table = () => {
  const [assessmentData, setAssessmentData] = useState<any>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(`${process.env.HOST}/api/v1/assessments/`)
      const res = await req.json()
      const lastestAssessmentTop3 = res.slice(-3)
      setAssessmentData(lastestAssessmentTop3)
    }
    fetchData()
  }, [])

  return (
    <GridContainer>
      <span className="Position">Name</span>
      <span className="Question">Status</span>
      <span className="Type">Type</span>

      <span />

      {assessmentData.map((assessment, ind) => (
        <React.Fragment key={ind}>
          <p>{ind + 1}</p>
          <p>{assessment?.uuid}</p>
          <p>{assessment?.uuid}</p>
          <ButtonsContainer>
            <CustomButton
              variant="contained"
              onClick={() => {
                router.push(`/admin/reports/${assessment?.uuid}`)
              }}
            >
              Check report
            </CustomButton>
          </ButtonsContainer>
        </React.Fragment>
      ))}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 1fr 1fr;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 18px;
  }
  & > * {
    min-width: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #d5d9e0;
    padding: 20px;
    overflow: hidden;

    text-overflow: ellipsis;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

const AdminPage = (
  <Layout title="Admin">
    <PageTitle title="Admin" description="This is admin Interface" />
    <Container>
      <Link href="admin/assessments">
        <Card style={{ width: "30%" }}>asdasd</Card>
      </Link>
      <Card style={{ width: "70%" }}>
        <Title>Recent reports</Title>
        <Table />
      </Card>
    </Container>
  </Layout>
)

const Admin = () => {
  const authenticateRender = useAuthenticate(null, AdminPage)

  return authenticateRender
}

export default Admin
