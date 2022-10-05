import styled from "@emotion/styled"
import { Button } from "@mui/material"
import CustomButton from "../../common/CustomButton/CustomButton"
import CustomTextField from "../../common/CustomTextField/CustomTextField"
import ModalWrapper from "../../common/Modal"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useUUIDContext } from "../../../context/UUIDContext"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import React from "react"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

type AssessmentResultCardProps = {
  isCompleted: boolean
}

export const AssessmentResultCard = ({
  isCompleted,
}: AssessmentResultCardProps) => {
  const { control, handleSubmit } = useForm()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { UUID } = useUUIDContext()
  const [open, setOpen] = useState(false)
  const [errOpen, setErrOpen] = useState(false)
  const [data, setData] = useState({
    uuid: UUID,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  })

  const handleOnClickModalClose = () => {
    setIsOpenModal(false)
  }

  //Submit user data
  const submitUserData = async () => {
    try {
      const req = await fetch(`${process.env.HOST}/api/v1/assessments/submit`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
      handleOnClickModalClose()
      console.log(req)
      if (req.ok) {
        setOpen(true)
      } else {
        setErrOpen(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
    setErrOpen(false)
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", color: "white" }}
        >
          Report successfully submitted!
        </Alert>
      </Snackbar>

      <Snackbar open={errOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%", color: "white" }}
        >
          Something went wrong while submitting the report.
        </Alert>
      </Snackbar>

      <Container>
        <div>
          <Title>Assessment report</Title>
          <Description>
            Check out your assessment summary and pick your favorite job to
            apply to.
          </Description>
          <Flex>
            <CustomButton
              variant="contained"
              style={{
                boxShadow: "none",
                borderRadius: "8px",
                background: !isCompleted ? "#D5D9E0" : "#0097F2",
              }}
              color="primary"
              onClick={() => {
                setIsOpenModal(true)
              }}
              disabled={!isCompleted}
            >
              Learn more
            </CustomButton>
            <ModalWrapper
              title="Submit report"
              text="Please provide the following information to submit the results of your assessment."
              isDisabled={isCompleted}
              onClickCallBack={handleOnClickModalClose}
              isOpen={isOpenModal}
            >
              <form onSubmit={handleSubmit(submitUserData)}>
                <Label>First name</Label>
                <CustomTextField
                  control={control}
                  name="first_Name"
                  label="Full name"
                  type="text"
                  variant="outlined"
                  value={data.first_name}
                  sx={{ marginBottom: "24px" }}
                  onChange={(e: any) =>
                    setData({ ...data, first_name: e.target.value })
                  }
                />
                <Label>Last name</Label>
                <CustomTextField
                  control={control}
                  name="last_name"
                  label="Last name"
                  type="text"
                  variant="outlined"
                  value={data.last_name}
                  sx={{ marginBottom: "24px" }}
                  onChange={(e: any) =>
                    setData({ ...data, last_name: e.target.value })
                  }
                />
                <Label>E-mail address</Label>
                <CustomTextField
                  control={control}
                  name="email"
                  label="E-mail address"
                  type="email"
                  variant="outlined"
                  value={data.email}
                  sx={{ marginBottom: "24px" }}
                  onChange={(e: any) =>
                    setData({ ...data, email: e.target.value })
                  }
                />
                <Label>Phone number (06 XX XXX XXXX)</Label>
                <CustomTextField
                  control={control}
                  name="phone_number"
                  label="Phone number"
                  type="text"
                  variant="outlined"
                  value={data.phone_number}
                  sx={{ marginBottom: "48px" }}
                  onChange={(e: any) =>
                    setData({ ...data, phone_number: e.target.value })
                  }
                />
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Button variant="contained" type="submit">
                    Submit report
                  </Button>
                </div>
              </form>
            </ModalWrapper>
            <Text>
              The results are available after finishing all questionnaires.
            </Text>
          </Flex>
        </div>
      </Container>
    </>
  )
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;
`

const Container = styled.form`
  background: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  background-color: #0288d1;
  background-image: url("results.png");
  background-size: cover;
  background-repeat: no-repeat;
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
