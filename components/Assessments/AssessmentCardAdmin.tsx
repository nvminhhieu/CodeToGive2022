import styled from "@emotion/styled"
import { Button, LinearProgress } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done"
import { useRouter } from "next/router"
import { assessments } from "../../data/assessment_display"

import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import TranslateIcon from "@mui/icons-material/Translate"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import CustomButton from "../common/CustomButton/CustomButton"

type Props = {
  assessment: typeof assessments[number]
  key?: string | number
}

const handleIcon = (name: string) => {
  switch (name) {
    case "WorkOutlineIcon":
      return <WorkOutlineIcon />
    case "TranslateIcon":
      return <TranslateIcon />
    case "VisibilityOutlinedIcon":
      return <VisibilityOutlinedIcon />
    case "QuizOutlinedIcon":
      return <QuizOutlinedIcon />
  }
}

const AssessmentCardAdmin = ({ assessment }: Props) => {
  const router = useRouter()
  return (
    <Container>
      <Justify>
        <div>
          <Title
            style={{
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            {assessment.title}
          </Title>
          <Description
            style={{
              color: "#6a6e77",
            }}
          >
            {assessment.description}
          </Description>
        </div>
        <Flex>
          <Icon
            style={{
              background: assessment.icon.color,
              opacity: 1,
            }}
          >
            {handleIcon(assessment.icon.name)}
          </Icon>
        </Flex>
      </Justify>

      <ButtonWrapper>
        <CustomButton
          style={{
            boxShadow: "none",
            padding: "8px 22px",
          }}
          variant="contained"
          color="primary"
          onClick={() => {
            router.push(`/admin/${assessment.url}`)
          }}
        >
          <Flex style={{ gap: "10px" }}>
            <span>Edit assessment</span>
            <EditIcon sx={{ color: "white", fontSize: "20px" }} />
          </Flex>
        </CustomButton>
        <DeleteButton>
          <DeleteOutlineIcon />
        </DeleteButton>
      </ButtonWrapper>
    </Container>
  )
}
export default AssessmentCardAdmin

const Flex = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
  }
`

const Justify = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Container = styled.div`
  background: linear-gradient(
      270deg,
      rgba(77, 197, 110, 0.06) 1.98%,
      rgba(255, 255, 255, 0) 55.09%
    ),
    #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px;
  margin-top: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 6px;
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-left: 10px;
`

const SuccessText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #4dc46e;
`

const Icon = styled.div`
  display: flex;
  min-width: 64px;
  height: 64px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: white;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 10px;
`
const DeleteButton = styled.div`
  padding: 12px;
  display: flex;
  border: 2px #ff0000 solid;
  border-radius: 8px;
  cursor: pointer;
  color: #ff0000;
  font-size: 20px;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #ff0000;
    color: white;
  }
`
