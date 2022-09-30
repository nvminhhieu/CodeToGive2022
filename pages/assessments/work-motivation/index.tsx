import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"
import { useState } from "react"
import Layout from "../../../components/Layout"
import QuestionCard from "../../../components/QuestionCard"
import RecommendedProfessions from "../../../components/RecommendedProfessions"
import { questions } from "../../../data/work_motivation_questions"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import { AnimatePresence, motion } from "framer-motion"
import PageTitle from "../../../components/Common/PageTitle"
import { CustomIconButton } from "../../../components/Common/CustomIconButton/CustomIconButton"
import dynamic from "next/dynamic"
import { CircularProgress } from "@mui/material"

const WorkMotivation = () => {
  const VoiceAssisstant = dynamic(
    () => import("../../../components/Common/VoiceAssisstant/VoiceAssisstant"),
    {
      loading: () => (
        <IconWrapper>
          <IconContainer style={{ padding: "20px" }}>
            <CircularProgress />
          </IconContainer>
        </IconWrapper>
      ),
      ssr: false,
    }
  )

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

  const onNextQuestion = () => {
    setCurrentQuestionIndex(
      handleIndexTransit(currentQuestionIndex + 1, questions)
    )
  }

  const onPrevQuestion = () => {
    setCurrentQuestionIndex(
      handleIndexTransit(currentQuestionIndex - 1, questions)
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

        <AnimatePresence mode="wait">
          <motion.div
            style={{ width: "100%" }}
            key={currentQuestionIndex}
            variants={questionCardSlideAnimation}
            initial="hidden"
            animate="visible"
            exit="fadeout"
          >
            <QuestionCard
              index={questions[currentQuestionIndex].index}
              description={questions[currentQuestionIndex].description}
              onClickCallBack={answerOnClickCallBack}
              image={questions[currentQuestionIndex].image.src}
              totalLength={questions.length}
            />
          </motion.div>
        </AnimatePresence>

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

      <CustomIconButton
        _onClick={() => setIsOpenRecommended(!isOpenRecommended)}
        icon={<WorkOutlineIcon />}
        align="center"
      />

      <VoiceAssisstant onNext={onNextQuestion} onPrev={onPrevQuestion} />

      <AnimatePresence>
        {isOpenRecommended ? (
          <RecommendedProfessionsCont
            variants={toggleAnimation}
            initial="hidden"
            animate="visible"
            exit="fadeout"
          >
            <RecommendedProfessions
              onClickCallBack={() => setIsOpenRecommended(!isOpenRecommended)}
            />
          </RecommendedProfessionsCont>
        ) : null}
      </AnimatePresence>
    </Layout>
  )
}

export default WorkMotivation

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
`

const Spacer = styled.div`
  width: 100%;
  height: 500px;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`
const IconWrapper = styled.div`
  position: fixed;
  bottom: 2vh;
  cursor: pointer;
`

const RecommendedProfessionsCont = styled(motion.div)`
  position: fixed;
  bottom: 2vh;
  align-self: center;
  width: 80%;
  max-width: 1080px;
`

const toggleAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  fadeout: {
    opacity: 0,
    y: 100,
  },
}

const questionCardSlideAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  fadeout: {
    opacity: 0,
  },
}
