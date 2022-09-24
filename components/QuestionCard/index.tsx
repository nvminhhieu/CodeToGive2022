import styled from "@emotion/styled"
import { ReactElement } from "react"
import CustomButton from "../common/CustomButton/CustomButton"

type Props = {
  image?: string
  onClickCallBack: any
  index: number
  description: string | ReactElement
}

const FALL_BACK_IMAGE =
  "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"

const QuestionCard = ({
  image,
  index,
  onClickCallBack,
  description,
}: Props) => {
  return (
    <Container>
      {image ? <ImageCover image={image} /> : null}
      <InnerContainer>
        <Content>
          <Title>Question {index}</Title>
          <Description>{description}</Description>
        </Content>
        <AnswerContainer>
          <CustomButton
            onClick={onClickCallBack}
            variant="contained"
            color="success"
            sx={{ width: "100%" }}
          >
            Agree
          </CustomButton>
          <CustomButton
            onClick={onClickCallBack}
            variant="contained"
            color="error"
            sx={{ width: "100%" }}
          >
            Disagree
          </CustomButton>
        </AnswerContainer>
      </InnerContainer>
    </Container>
  )
}

export default QuestionCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  width: 460px;
  height: 475px;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
`

const ImageCover = styled.div<{ image?: string }>`
  background-image: url(${({ image }) => (image ? image : FALL_BACK_IMAGE)});
  background-position: center;
  background-size: cover;
  border-radius: 16px 16px 0 0;
  width: 100%;
  min-height: 200px;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 24px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`
const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.87);
`
const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
`
const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 24px;
  gap: 8px;
`
