import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Table from "../../../components/Admin/Table/Table"
import CustomButton from "../../../components/common/CustomButton/CustomButton"
import CustomTextField from "../../../components/common/CustomTextField/CustomTextField"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { ITest, Question } from "../../../types/assessment"
import CheckIcon from "@mui/icons-material/Check"

const filterQuestionType = (arrayAllQuestions: Question[], type: any) => {
  return arrayAllQuestions.filter((question) => question.type === type)
}

const filterTestType = (arrayAllTests: ITest[], type: any) => {
  return arrayAllTests.filter((test) => test.type === type)
}

const handleQueryRouteToTypeQuestion = (
  queryText: string | undefined | string[]
) => {
  switch (queryText) {
    case "motivation-question":
      return "MOTIVATION_QUESTION"
    default:
      return ""
  }
}

const handleQueryRouteToTypeTest = (
  queryText: string | undefined | string[]
) => {
  switch (queryText) {
    case "motivation-question":
      return "MOTIVATION_TEST"
    default:
      return ""
  }
}

const AssessmentTypeEdit = () => {
  const router = useRouter()
  const routerQuery = router.query.assessmentType
  const questionTypeRoute = handleQueryRouteToTypeQuestion(routerQuery)

  const testTypeRoute = handleQueryRouteToTypeTest(routerQuery)
  const [questionData, setQuestionData] = useState<Question[]>([])
  const [testData, setTestData] = useState<ITest>()

  const [isSaved, setIsSaved] = useState(false)

  const fetchData = async () => {
    try {
      // GET ALL QUESTION
      const reqQuestion = await fetch(`${process.env.HOST}/api/v1/questions/`)
      const resQuestion = await reqQuestion.json()
      const allTypeQuestionsData = resQuestion

      // GET ALL TEST
      const reqTest = await fetch(`${process.env.HOST}/api/v1/tests/`)
      const resTest = await reqTest.json()
      const allTypeTestData = resTest

      setTestData(filterTestType(allTypeTestData, testTypeRoute)[0]) //JUST A WORK AROUND, CAUSE NO GENERAL TEST TYPE

      setQuestionData(
        filterQuestionType(allTypeQuestionsData, questionTypeRoute)
      )
    } catch {
      setQuestionData([])
    }
  }

  const { control, handleSubmit } = useForm()

  return (
    <Layout>
      <Flex>
        <PageTitle
          title={"Edit " + testTypeRoute}
          description="Edit Assessment and modify data"
        />
        <CustomButton
          onClick={() => {
            setIsSaved(true)
          }}
          sx={{ width: "10%" }}
          variant="contained"
          disabled={isSaved}
        >
          Save
          {isSaved ? "d" : null}
          {isSaved ? (
            <CheckIcon
              sx={{ color: "#A0A2A3", fontSize: "20px", marginLeft: "5px" }}
            />
          ) : null}
        </CustomButton>
      </Flex>
      <UpperContainerForm>
        <CustomButton
          onClick={fetchData}
          sx={{ width: "20%" }}
          variant="contained"
        >
          Fetch Data
        </CustomButton>
        <SubTitle>Assessment Information</SubTitle>
        <CustomTextField
          control={control}
          name="title"
          label="Title"
          type="text"
          variant="outlined"
          value={testData ? testData.title : ""}
        />
        <CustomTextField
          control={control}
          name="description"
          label="Description"
          type="text"
          variant="outlined"
          value={testData ? testData.title : ""}
        />
      </UpperContainerForm>

      <SubTitle style={{ margin: "40px 0" }}>Questions</SubTitle>

      <Table questionsData={questionData} />
    </Layout>
  )
}

export default AssessmentTypeEdit

const UpperContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 30px;
`

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
