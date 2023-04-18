import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"
import { useState, useEffect, useCallback, useRef } from "react"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import QuestionCard from "../../../components/QuestionCard"
import RecommendedProfessions from "../../../components/RecommendedProfessions"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form"
import IJob from "../../../types/job"
import { suggestedJobs as mock_suggestedJobs } from "../../../data/suggested_job"
import usePrevious from "../../../hooks/usePrevious"
import { ITest } from "../../../types/assessment"
import { test as mock_test } from "../../../data/work_motivation_questions"
import DoneIcon from "@mui/icons-material/Done"
import { useUUIDContext } from "../../../context/UUIDContext"
import Link from "next/link"
import { useRouter } from "next/router"
import { speak } from "../../../components/common/VoiceAssisstant/VoiceAssisstant"

const WorkMotivation = () => {
  const { UUID } = useUUIDContext()
  const router = useRouter()
  const testId = router.query.testId

  const [isOpenRecommended, setIsOpenRecommended] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [message, setMessage] = useState("")
  const [data, setData] = useState<IJob[]>([])
  const [suggestedJobNoti, setSuggestedJobNoti] = useState(false)
  const previousQuestionIndex = usePrevious(currentQuestionIndex)

  const [testData, setTestData] = useState<ITest>({} as ITest)

  useEffect(() => {
    const fetchTestData = async () => {
      if (typeof testId === "string") {
        try {
          const req = await fetch(
            //`${process.env.HOST}/api/v1/assessments/${uuid}/tests?test_type=MOTIVATION_TEST`
            `${process.env.HOST}/api/v1/tests/${testId}`
          )
          const res = await req.json()
          setTestData(res)
        } catch {
          setTestData({} as ITest)
        }
      }
    }

    fetchTestData()
  }, [UUID, currentQuestionIndex])

  const questions = testData.questions || mock_test.questions

  const { control, handleSubmit, setValue, reset } = useForm()
  const onSubmit = (data: any) => {
    //Constructing answer obj
    const constructedAnswer = (data: any) => {
      if (previousQuestionIndex !== undefined) {
        // const answerId = data?.slider_value || 2
        const answerDescription = data?.description
        const answerObj = questions[previousQuestionIndex].answers.find(
          (e) => parseInt(e.description) == answerDescription
        )
        return {
          test_id: testData.test_id,
          ...answerObj,
        }
      } else {
        //JUST A WORK AROUND
        console.log("Work AROUND")
        const answerObj = questions[0].answers[0]
        return {
          test_id: testData.test_id,
          ...answerObj,
        }
      }
    }

    //Submit answer
    const submitingAnswer = async (data: any) => {
      try {
        const req = await fetch(`${process.env.HOST}/api/v1/answers/submit`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
      } catch (error) {
        console.log("skipQuestion", error)
      }
    }

    submitingAnswer(constructedAnswer(data))
    fetchRecommendedJobsData()
    setSuggestedJobNoti(true)
    reset({})
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleIndexTransit = (nextValueIndex: number, array: any) => {
    if (nextValueIndex >= 0 && nextValueIndex < array.length)
      return nextValueIndex
    return currentQuestionIndex
  }

  const fetchRecommendedJobsData = async () => {
    try {
      const req = await fetch(
        `${process.env.HOST}/api/v1/assessments/${UUID}/suggested-jobs`
      )
      const res = await req.json()
      const getFirstThree = res.slice(0, 3)
      setData(getFirstThree)
      console.log("getFirstThree", getFirstThree)
    } catch {
      console.log("tere")
      setData([])
    }
  }

  const fetchRecommendedJobsDataTest_REMOVE_LATER = async () => {
    setData(mock_suggestedJobs)
  }

  const answerOnClickCallBack = () => {
    setCurrentQuestionIndex(
      handleIndexTransit(currentQuestionIndex + 1, questions)
    )
    //Submit here
    if (currentQuestionIndex + 1 === questions.length) {
      router.back()
    }
  }

  const commands = [
    {
      command: "Next",
      callback: () => {
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
        speak("Next question")
        setMessage("Reading next question")
      },
    },
    {
      command: "Previous",
      callback: () => {
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex - 1, questions)
        )
        speak("Previous question")
        setMessage("Reading previous question")
      },
    },
  ]

  const formRef = useRef<any>(null)
  const navigate = useCallback(
    (event: any) => {
      if (event.keyCode === 37) {
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex - 1, questions)
        )
      } else if (event.keyCode === 39) {
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
      } else if (event.keyCode === 32) {
        setIsOpenRecommended(!isOpenRecommended)
      } else if (event.keyCode === 49 || event.keyCode === 97) {
        setValue("description", "1")
        formRef.current &&
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          )
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
      } else if (event.keyCode === 50 || event.keyCode === 98) {
        setValue("description", "2")
        formRef.current &&
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          )
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
      } else if (event.keyCode === 51 || event.keyCode === 99) {
        setValue("description", "3")
        formRef.current &&
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          )
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
      } else if (event.keyCode === 52 || event.keyCode === 100) {
        setValue("description", "4")
        formRef.current &&
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          )
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
      } else if (event.keyCode === 53 || event.keyCode === 101) {
        setValue("description", "5")
        formRef.current &&
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          )
        setCurrentQuestionIndex(
          handleIndexTransit(currentQuestionIndex + 1, questions)
        )
      }
    },
    [
      currentQuestionIndex,
      handleIndexTransit,
      isOpenRecommended,
      questions,
      setValue,
    ]
  )

  useEffect(() => {
    document.addEventListener("keydown", navigate, false)

    return () => {
      document.removeEventListener("keydown", navigate, false)
    }
  }, [navigate])

  useEffect(() => {
    const timer = setTimeout(() => setMessage(""), 5000)
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    fetchRecommendedJobsData()
  }, [UUID])

  return (
    <Layout commands={commands} message={message} title="Work Motivation Test">
      <PageTitle
        title="Work motivation test"
        backURL={`/${UUID}`}
        description={
          <>
            Tell more about your interests so you can find the most suitable
            job.
          </>
        }
        showTooltip
      />

      <CardContainer ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <IconContainer
          type="submit"
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
              index={currentQuestionIndex + 1}
              description={questions[currentQuestionIndex]?.description}
              onClickCallBack={answerOnClickCallBack}
              image={questions[currentQuestionIndex]?.image?.src}
              totalLength={questions?.length}
              formControl={control}
              answeredId={questions[currentQuestionIndex]?.answered_id}
              answers={questions[currentQuestionIndex]?.answers}
              setValue={setValue}
            />
          </motion.div>
        </AnimatePresence>

        <IconContainer
          type="submit"
          onClick={() => {
            //fetchRecommendedJobsDataTest_REMOVE_LATER()
            setCurrentQuestionIndex(
              handleIndexTransit(currentQuestionIndex + 1, questions)
            )
            if (currentQuestionIndex + 1 === questions.length) {
              router.back()
            }
          }}
        >
          {currentQuestionIndex + 1 === questions.length ? (
            <SvgIcon sx={{ fontSize: "50px", color: "#0097F2" }}>
              <DoneIcon />
            </SvgIcon>
          ) : (
            <SvgIcon sx={{ fontSize: "50px", color: "#0097F2" }}>
              <NavigateNextIcon />
            </SvgIcon>
          )}
        </IconContainer>
      </CardContainer>
      <Spacer />

      <IconWrapper
        onClick={() => {
          setSuggestedJobNoti(false)
          setIsOpenRecommended(!isOpenRecommended)
        }}
      >
        <IconContainer active={!suggestedJobNoti} style={{ padding: "20px" }}>
          <SvgIcon
            sx={{
              fontSize: "30px",
              color: !suggestedJobNoti ? "#0097F2" : "white",
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

const CardContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Spacer = styled.div`
  width: 100%;
  height: 500px;
`
const IconContainer = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) => (active === false ? "#0097F2" : "#ffffff")};
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 50%;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 0.4s;
`

const RecommendedProfessionsCont = styled(motion.div)`
  position: fixed;
  bottom: 2vh;
  align-self: center;
  width: 80%;
  max-width: 1080px;
`

const IconWrapper = styled.div`
  position: fixed;
  bottom: 2vh;
  cursor: pointer;
  align-self: center;
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
