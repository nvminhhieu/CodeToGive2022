import { useUUIDContext } from "../../../context/UUIDContext"
import PageTitle from "../../../components/Common/PageTitle"
import Layout from "../../../components/Layout"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import RecommendedProfessions from "../../../components/RecommendedProfessions"
import IJob from "../../../types/job"

type Props = {
  text: string
  detail: string
}

const DetailsWrapper = ({ text, detail }: Props) => {
  return (
    <Grid>
      <Text>{text}</Text>
      <Detail>{detail}</Detail>
    </Grid>
  )
}

const ReportPage = () => {
  const { UUID } = useUUIDContext()
  const [data, setData] = useState<IJob[]>([])
  const [user, setUser] = useState()

  useEffect(() => {
    const fetchUserData = async () => {
      const req = await fetch(`${process.env.HOST}/api/v1/users/${UUID}`)
      const res = await req.json()
      setUser(res)
    }
    fetchUserData()

    const fetchRecommendedJobsData = async () => {
      const req = await fetch(
        `${process.env.HOST}/api/v1/${UUID}/suggested-jobs`
      )
      const res = await req.json()
      setData(res)
    }
    fetchRecommendedJobsData()
  }, [UUID])

  return (
    <Layout title="Report">
      <PageTitle
        title="Assessment summary"
        description="Here you can find the summary of your assessments."
      />
      <div style={{ paddingBottom: "60px" }}>
        <Title>Personal data</Title>
        <Container>
          <DetailsWrapper text="Full name" detail="Kovács Sándor" />
          <DetailsWrapper
            text="Birth place, date"
            detail="Sopron, 1992. 04. 08."
          />
          <DetailsWrapper
            text="E-mail address"
            detail="sandor.kovacs42@gmail.com"
          />
          <DetailsWrapper text="Phone number" detail="06 20 234 5678" />
        </Container>
        <Title>Test results</Title>
        <Title>Recommended jobs</Title>
        <RecommendedProfessions data={data} />
      </div>
    </Layout>
  )
}

export default ReportPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  padding: 12px 0;
`

const Title = styled.h2`
  margin-top: 60px;
  margin-bottom: 40px;
  font-size: 56px;
  color: black;
  font-weight: 600;
`
const Text = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 700;
`
const Detail = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 400;
  color: black;
`
