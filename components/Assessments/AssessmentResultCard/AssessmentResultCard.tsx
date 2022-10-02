import styled from "@emotion/styled"
import { Button } from "@mui/material"
import CustomTextField from "../../Common/CustomTextField/CustomTextField"
import ModalWrapper from "../../Common/Modal"
import { useForm } from "react-hook-form"

type AssessmentResultCardProps = {
  isCompleted: boolean
}

export const AssessmentResultCard = ({
  isCompleted,
}: AssessmentResultCardProps) => {
  const { control, handleSubmit } = useForm()
  return (
    <Container>
      <div>
        <Title>Assessment report</Title>
        <Description>
          Check out your assessment summary and pick your favorite job to apply
          to.
        </Description>
        <Flex>
          <ModalWrapper
            title="Get the report"
            text="Please provide the following information before getting the assessment summary."
            buttonTitle="Get the report"
            isDisabled={isCompleted}
          >
            <Label>Full name</Label>
            <CustomTextField
              control={control}
              name="name"
              label="Full name"
              type="text"
              variant="outlined"
              sx={{ marginBottom: "24px" }}
            />
            <Label>E-mail address</Label>
            <CustomTextField
              control={control}
              name="email"
              label="E-mail address"
              type="email"
              variant="outlined"
              sx={{ marginBottom: "24px" }}
            />
            <Label>Phone number (06 XX XXX XXXX)</Label>
            <CustomTextField
              control={control}
              name="phone"
              label="Phone number"
              type="phone"
              variant="outlined"
              sx={{ marginBottom: "48px" }}
            />
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <Button variant="contained">Get the report</Button>
            </div>
          </ModalWrapper>
          <Text>
            The results are available after finishing all questionnaires.
          </Text>
        </Flex>
      </div>
    </Container>
  )
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;
`

const Container = styled.div`
  background: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  background-color: #0288d1;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 6px;
  color: white;
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: white;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-left: 10px;
  height: fit-content;
`
const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding-bottom: 8px;
`
