import { useState } from "react"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { Question } from "../../../types/assessment"

const filterQuestionType = (arrayAllQuestions: Question[], type: any) => {
  return arrayAllQuestions.filter((question) => question.type === type)
}

const Assessment = () => {
  const [workMotivationQuestionsData, setWorkMotivationQuestionsData] =
    useState<Question[]>([])

  const fetchAllQuestion = async () => {
    try {
      const req = await fetch(`${process.env.HOST}/api/v1/questions/`)
      const res = await req.json()
      const allTypeQuestionsData = res

      setWorkMotivationQuestionsData(
        filterQuestionType(allTypeQuestionsData, "MOTIVATION_QUESTION")
      )
    } catch {
      setWorkMotivationQuestionsData([])
    }
  }

  console.log("workMotivationQuestionsData", workMotivationQuestionsData)

  return (
    <Layout>
      <PageTitle
        title="Assessment"
        description="You can control assessment, and create question here"
      />
      <button onClick={fetchAllQuestion}>Get all Question</button>
      <h1>WORK_MOTIVATION_QUESTION</h1>
      {workMotivationQuestionsData.map((e, i) => (
        <div key={i}>
          {e.question_id} - {e.description}
        </div>
      ))}
    </Layout>
  )
}

export default Assessment
