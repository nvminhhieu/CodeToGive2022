import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Table from "../../../components/Admin/Table/Table"
import CustomTextField from "../../../components/common/CustomTextField/CustomTextField"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { Question } from "../../../types/assessment"

const filterQuestionType = (arrayAllQuestions: Question[], type: any) => {
  return arrayAllQuestions.filter((question) => question.type === type)
}

const handleQueryRouteToType = (queryText: string | undefined | string[]) => {
  switch (queryText) {
    case "motivation-question":
      return "MOTIVATION_QUESTION"
    default:
      return ""
  }
}

type Props = {
  questionData: Question[]
}

const AssessmentTypeEdit = ({ questionData }: Props) => {
  const { control, handleSubmit } = useForm()

  return (
    <Layout>
      <PageTitle title="Edit assessment" />
      <UpperContainerForm>
        <h2>Assessment Information</h2>
        <CustomTextField
          control={control}
          name="title"
          label="Title"
          type="text"
          variant="outlined"
        />
        <CustomTextField
          control={control}
          name="description"
          label="Description"
          type="text"
          variant="outlined"
        />
      </UpperContainerForm>

      <Table questionsData={questionData} />
    </Layout>
  )
}

export default AssessmentTypeEdit

export async function getServerSideProps(context: any) {
  const routerQuery = context.params.assessmentType
  const questionTypeRoute = handleQueryRouteToType(routerQuery)
  let questionData: Question[]
  try {
    const req = await fetch(`${process.env.HOST}/api/v1/questions/`)
    const res = await req.json()
    const allTypeQuestionsData = res

    questionData = filterQuestionType(allTypeQuestionsData, questionTypeRoute)
  } catch {
    questionData = []
  }

  return {
    props: {
      questionData,
    }, // will be passed to the page component as props
  }
}

const UpperContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 30px;
  h2 {
    font-weight: 700;
    font-size: 32px;
  }
`
