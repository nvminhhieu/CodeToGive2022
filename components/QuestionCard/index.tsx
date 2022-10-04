import styled from "@emotion/styled"
import { ReactElement, useCallback, useEffect, useState } from "react"
import AnswerButton from "./AnswerButton/AnswerButton"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import CustomSlider from "../common/CustomSlider/CustomSlider"
import { Answer } from "../../types/assessment"

type Props = {
  image?: string
  onClickCallBack: any
  index: number
  description: string | ReactElement
  totalLength: number
  formControl: any
  answeredId?: null | number
  answers: Answer[]
  setValue: any
}

const MARKS_MAP = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
]

const FALL_BACK_IMAGE =
  "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"

const QuestionCard = ({
  image,
  index,
  onClickCallBack,
  description,
  totalLength,
  answers,
  answeredId,
  setValue,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(0)
  const findAnswerValue = (answer_id: number | null | undefined) => {
    if (answer_id)
      return answers.find((e) => e.answer_id === answer_id)?.description
    return undefined
  }
  const answeredValueDefault = findAnswerValue(answeredId)

  const navigate = useCallback((event: any) => {
    if (event.keyCode === 49 || event.keyCode === 97) {
      setValue("description", "1")
      onClickCallBack()
    } else if (event.keyCode === 50 || event.keyCode === 98) {
      setValue("description", "2")
      onClickCallBack()
    } else if (event.keyCode === 51 || event.keyCode === 99) {
      setValue("description", "3")
      onClickCallBack()
    } else if (event.keyCode === 52 || event.keyCode === 100) {
      setValue("description", "4")
      onClickCallBack()
    } else if (event.keyCode === 53 || event.keyCode === 101) {
      setValue("description", "5")
      onClickCallBack()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", navigate, false)

    return () => {
      document.removeEventListener("keydown", navigate, false)
    }
  }, [])

  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          {image ? <ImageCover image={image} /> : null}
          <Content>
            <Title>
              Question {index} of {totalLength}
            </Title>
            <Description>{description}</Description>
          </Content>
        </ContentContainer>
      </InnerContainer>

      <AnswerContainer>
        <AnswerTextSpectrum>Not Important</AnswerTextSpectrum>
        {answers.map((e, i) => {
          return (
            <AnswerButton
              type="submit"
              key={e.answer_id}
              onClick={() => {
                setValue("description", e.description)
                //setSelectedAnswer(i + 1)
                onClickCallBack()
              }}
              active={
                //selectedAnswer === i + 1 ||
                answeredValueDefault === e.description
              }
            >
              {e.description}
            </AnswerButton>
          )
        })}
        <AnswerTextSpectrum>Very Important</AnswerTextSpectrum>
      </AnswerContainer>
    </Container>
  )
}

export default QuestionCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
`

const ImageCover = styled.div<{ image?: string }>`
  background-image: url(${({ image }) => (image ? image : FALL_BACK_IMAGE)});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  width: 100%;
  min-height: 200px;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 48px;
`
const ContentContainer = styled.div`
  display: flex;
  gap: 48px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  padding-top: 20px;
`
const Title = styled.p`
  //font-family: "Open Sans";
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
`
const Description = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.87);
`
const AnswerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  padding-top: 0;
  gap: 12px;
`

const AnswerTextSpectrum = styled.p`
  display: flex;
  flex: none;
  font-size: 14px;
  color: #6a6e77;
`
