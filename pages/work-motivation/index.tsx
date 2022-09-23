import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"
import { useState } from "react"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
import QuestionCard from "../../components/QuestionCard"
import RecommendedProfessions from "../../components/RecommendedProfessions"
import { questions } from "../../data/work_motivation_questions"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

const WorkMotivation = () => {
  const [isOpenRecommended, setIsOpenRecommended] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleIndexTransit = (nextValueIndex: number, array: any) => {
    if (nextValueIndex >= 0 && nextValueIndex < array.length)
      return nextValueIndex
    return currentQuestionIndex
  }
  const answerOnClickCallBack = () => {
    setCurrentQuestionIndex(
      handleIndexTransit(currentQuestionIndex + 1, questions)
    )
  }

  return (
    <Layout>
      <PageTitle
        title="Work motivation test"
        description={
          <>
            Tell more about your interests so you can find the most suitable
            job.
          </>
        }
      />
      <div onClick={() => setIsOpenRecommended(!isOpenRecommended)}>Toggle</div>
      <CardContainer>
        <div
          onClick={() => {
            setCurrentQuestionIndex(
              handleIndexTransit(currentQuestionIndex - 1, questions)
            )
          }}
        >
          <SvgIcon sx={{ fontSize: "50px" }}>
            <NavigateBeforeIcon />
          </SvgIcon>
        </div>

        <QuestionCard
          index={questions[currentQuestionIndex].index}
          description={questions[currentQuestionIndex].description}
          onClickCallBack={answerOnClickCallBack}
          image={questions[currentQuestionIndex].image.src}
        />
        <div
          onClick={() => {
            setCurrentQuestionIndex(
              handleIndexTransit(currentQuestionIndex + 1, questions)
            )
          }}
        >
          <SvgIcon sx={{ fontSize: "50px" }}>
            <NavigateNextIcon />
          </SvgIcon>
        </div>
      </CardContainer>
      <Spacer />
      {isOpenRecommended ? <RecommendedProfessions /> : null}
    </Layout>
  )
}

export default WorkMotivation

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Spacer = styled.div`
  width: 100%;
  height: 500px;
`
