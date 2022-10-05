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
      try {
        const req = await fetch(`${process.env.HOST}/api/v1/assessments/`)
        const res = await req.json()
        const onlyTestsHaveQuestionsMoreThan1 = res?.filter(
          (e: any) => e.tests.length > 1
        )
        // WORK AROUND TO DEMO THE ONLY CREATED TEST
        console.log(
          "onlyTestsHaveQuestionsMoreThan1",
          onlyTestsHaveQuestionsMoreThan1
        )
        setAssessmentData(onlyTestsHaveQuestionsMoreThan1)
      } catch {
        setAssessmentData([])
      }
    }
    fetchData()
  }, [])

  return (
    <GridContainer>
      <span className="Position">Name</span>
      <span className="Question">Status</span>
      <span className="Type">Type</span>

      <span />

      {assessmentData?.map((assessment: any, ind: any) => (
        <React.Fragment key={ind}>
          <p>
            {assessment?.owner
              ? assessment?.owner?.last_name +
                " " +
                assessment?.owner?.first_name
              : "Guest User"}
          </p>
          <p>Finished</p>
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
  grid-template-columns: 150px 1fr 1.2fr 1fr;
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
    <PageTitle
      title="Admin Dashboard"
      description="Collections of tools for Admin"
    />
    <Container>
      <Card style={{ width: "30%", height: "170px" }}>
        <Title>Assessment</Title>
        <Link href="admin/assessments">
          <div style={{ margin: "30px 0" }}>
            <CustomButton
              variant="contained"
              sx={{ width: "100%", margin: "auto 0" }}
            >
              Create a custom assessment
            </CustomButton>
          </div>
        </Link>
      </Card>
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
