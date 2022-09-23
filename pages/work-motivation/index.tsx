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
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"

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

      <CardContainer>
        <IconContainer
          onClick={() => {
            setCurrentQuestionIndex(
              handleIndexTransit(currentQuestionIndex - 1, questions)
            )
          }}
        >
          <SvgIcon sx={{ fontSize: "50px", color: "#0097F2" }}>
            <NavigateBeforeIcon />
          </SvgIcon>
        </IconContainer>

        <QuestionCard
          index={questions[currentQuestionIndex].index}
          description={questions[currentQuestionIndex].description}
          onClickCallBack={answerOnClickCallBack}
          image={questions[currentQuestionIndex].image.src}
        />
        <IconContainer
          onClick={() => {
            setCurrentQuestionIndex(
              handleIndexTransit(currentQuestionIndex + 1, questions)
            )
          }}
        >
          <SvgIcon sx={{ fontSize: "50px", color: "#0097F2" }}>
            <NavigateNextIcon />
          </SvgIcon>
        </IconContainer>
      </CardContainer>
      <Spacer />
      <IconWrapper onClick={() => setIsOpenRecommended(!isOpenRecommended)}>
        <IconContainer>
          <SvgIcon sx={{ fontSize: "30px", color: "#0097F2" }}>
            <WorkOutlineIcon />
          </SvgIcon>
        </IconContainer>
      </IconWrapper>

      {isOpenRecommended ? (
        <RecommendedProfessions
          onClickCallBack={() => setIsOpenRecommended(!isOpenRecommended)}
        />
      ) : null}
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
const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 50%;
`

const IconWrapper = styled.div`
  position: fixed;
  bottom: 2vh;
  align-self: center;
  cursor: pointer;
`
