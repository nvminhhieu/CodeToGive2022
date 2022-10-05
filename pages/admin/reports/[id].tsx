import { useUUIDContext } from "../../../context/UUIDContext"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import RecommendedProfessions from "../../../components/RecommendedProfessions"
import IJob from "../../../types/job"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Button, CircularProgress } from "@mui/material"
import { rearrangedArray } from "../../[id]"
import { assessments as mock_assessments_display } from "../../../data/assessment_display"
import { ITest, ITestDisplay, Question } from "../../../types/assessment"
import { useRouter } from "next/router"
import React from "react"

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
  const [data, setData] = useState<IJob[]>([])
  const [user, setUser] = useState<any>(null)
  const [assessments, setAssessments] = useState<ITestDisplay[]>([])
  const [testData, setTestData] = useState<any>({})
  const [labels, setLabels] = useState()
  const [questions, setQuestions] = useState()
  const ids = []
  // TODO: ADD 3 MORE TestDATA State for each of the tests
  const router = useRouter()
  const id = router.query.id

  const fetchTestData = async (testType: string) => {
    const req = await fetch(
      `${process.env.HOST}/api/v1/assessments/${id}/tests?test_type=${testType}`
    )
    const res = await req.json()
    setTestData(res)
  }

  useEffect(() => {
    if (assessments.length > 0) {
      const motivationTestType =
        assessments?.find((e) => e.type === "MOTIVATION_TEST")?.type ||
        "MOTIVATION_TEST"
      fetchTestData(motivationTestType)
    }
  }, [assessments])

  useEffect(() => {
    const fetchUserData = async () => {
      const req = await fetch(`${process.env.HOST}/api/v1/users/${id}`)
      const res = await req.json()
      setUser(res)
    }
    fetchUserData()

    const fetchRecommendedJobsData = async () => {
      const req = await fetch(`${process.env.HOST}/api/v1/${id}/suggested-jobs`)
      const res = await req.json()
      setData(res)
    }
    fetchRecommendedJobsData()

    const fetchAssessmentData = async () => {
      try {
        const req = await fetch(`${process.env.HOST}/api/v1/assessments/${id}`)
        const res = await req.json()

        const testsArray = rearrangedArray(2, 0, res.tests)

        setUser(res.owner)
        setAssessments(testsArray)
      } catch {}
    }
    fetchAssessmentData()

    const fetchLabels = async () => {
      try {
        const req = await fetch(`${process.env.HOST}/api/v1/labels`)
        const res = await req.json()
        setLabels(res)
      } catch {}
    }
    fetchLabels()

    const fetchQuestions = async () => {
      try {
        const req = await fetch(`${process.env.HOST}/api/v1/questions`)
        const res = await req.json()
        setQuestions(res)
      } catch {}
    }
    fetchQuestions()
  }, [id])
  console.log(labels, testData.questions, questions)

  console.log(testData.questions?.map((v) => ids.push(v.question_id)))

  return (
    <Layout title="Report">
      <PageTitle
        title="Assessment summary"
        description="Here you can find the summary of your assessments."
      />
      <div style={{ paddingBottom: "60px" }}>
        <Title
          style={{
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          Personal data
        </Title>
        <Container>
          {user && typeof id === "string" ? (
            <>
              <DetailsWrapper text="UUID" detail={id} />
              <DetailsWrapper
                text="Full name"
                detail={user?.first_name + " " + user?.last_name}
              />
              <DetailsWrapper text="E-mail address" detail={user?.email} />
              <DetailsWrapper text="Phone number" detail={user?.phone_number} />
            </>
          ) : (
            <Text>No owner of this report</Text>
          )}
        </Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          <Title>Test results</Title>
          <Button variant="contained" style={{ height: "fit-content" }}>
            Download PDF
          </Button>
        </div>
        {assessments.map((assessment, i) => (
          <Accordion
            key={i}
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              boxShadow:
                "0px 0px 7px rgba(7, 31, 54, 0.04), 0px 15px 17px -1px rgba(5, 125, 236, 0.1)",
              borderRadius: "16px",
              marginBottom: "24px",
              padding: "12px 0",
            }}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SubTitle>{assessment?.title}</SubTitle>
            </AccordionSummary>
            <AccordionDetails>
              <Table questionsData={testData?.questions} />
            </AccordionDetails>
          </Accordion>
        ))}
        <Title
          style={{
            marginTop: "60px",
            marginBottom: "40px",
          }}
        >
          Recommended jobs
        </Title>
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
  font-size: 56px;
  color: black;
  font-weight: 600;
`
const SubTitle = styled.h3`
  font-size: 32px;
  color: black;
  font-weight: 700;
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

type PropsTable = {
  questionsData: Question[]
}

const Table = ({ questionsData }: PropsTable) => {
  return (
    <GridContainer>
      <span className="Position">#</span>
      <span className="Question">Question</span>
      <span className="Type">Type</span>
      <span className="Answers"> Answers</span>

      {questionsData?.map((question, ind) => (
        <React.Fragment key={ind}>
          <p>{ind + 1}</p>
          <p>{question.description}</p>
          <p>{question.type}</p>
          <p>
            {
              question.answers.find((e) => e.answer_id === question.answered_id)
                ?.description
            }
          </p>
        </React.Fragment>
      ))}
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 3fr 2fr 1fr;
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
