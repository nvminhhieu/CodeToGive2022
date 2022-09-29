import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"
import { useEffect, useState } from "react"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import QuestionCard from "../../../components/QuestionCard"
import RecommendedProfessions from "../../../components/RecommendedProfessions"
import { questions } from "../../../data/work_motivation_questions"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import { AnimatePresence, motion } from "framer-motion"
import IJob from "../../../types/job"
import { suggestedJobs } from "../../../data/suggested_job"
import usePrevious from "../../../hooks/usePrevious"

const WorkMotivation = () => {
  const [isOpenRecommended, setIsOpenRecommended] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [data, setData] = useState<IJob[]>([])
  const previousDataState = usePrevious(data)

  const handleIndexTransit = (nextValueIndex: number, array: any) => {
    if (nextValueIndex >= 0 && nextValueIndex < array.length)
      return nextValueIndex
    return currentQuestionIndex
  }

  const fetchRecommendedJobsData = async () => {
    const req = await fetch(`${process.env.HOST}/api/v1/user/suggested-jobs`)
    const res = await req.json()
    setData(res)
  }

  const fetchRecommendedJobsDataTest_REMOVE_LATER = async () => {
    setData(suggestedJobs)
  }

  const answerOnClickCallBack = () => {
    fetchRecommendedJobsData()
    setCurrentQuestionIndex(
      handleIndexTransit(currentQuestionIndex + 1, questions)
    )
  }

  useEffect(() => {
    fetchRecommendedJobsData()
  }, [])

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
            fetchRecommendedJobsData()
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
            //fetchRecommendedJobsData()
            fetchRecommendedJobsDataTest_REMOVE_LATER()
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
        <IconContainer
          active={JSON.stringify(data) === JSON.stringify(previousDataState)}
          style={{ padding: "20px" }}
        >
          <SvgIcon
            sx={{
              fontSize: "30px",
              color:
                JSON.stringify(data) === JSON.stringify(previousDataState)
                  ? "#0097F2"
                  : "white",
            }}
          >
            <WorkOutlineIcon />
          </SvgIcon>
        </IconContainer>
      </IconWrapper>

      <AnimatePresence>
        {isOpenRecommended ? (
          <RecommendedProfessionsCont
            variants={toggleAnimation}
            initial="hidden"
            animate="visible"
            exit="fadeout"
          >
            <RecommendedProfessions
              data={data}
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
const IconContainer = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) => (active === false ? "#0097F2" : "#ffffff")};
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background 0.4s;
`

const IconWrapper = styled.div`
  position: fixed;
  bottom: 2vh;
  align-self: center;
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
