import styled from "@emotion/styled"
import { useEffect, useRef, useState } from "react"
import AssessmentCardAdmin from "../../../components/Assessments/AssessmentCardAdmin"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { assessments as mock_assessment } from "../../../data/assessment_display"
import { ITest, Question } from "../../../types/assessment"
import CustomButton from "../../../components/common/CustomButton/CustomButton"
import ModalWrapper from "../../../components/common/Modal"
import CustomTextField from "../../../components/common/CustomTextField/CustomTextField"
import { Controller, useForm } from "react-hook-form"
import { MenuItem, Select } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const Assessment = () => {
  const [UUID, setUUID] = useState<any>()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
  const [assessmentData, setAssessmentData] = useState<ITest[] | any>([])
  const {
    control: controlLink,
    handleSubmit: handleSubmitLink,
    setValue: setValueLink,
  } = useForm()

  const {
    control: controlCreate,
    handleSubmit: handleSubmitCreate,
    setValue: setValueCreate,
  } = useForm()

  const fetchDataAssessment = () => {
    setTimeout(async () => {
      try {
        const req = await fetch(
          `${process.env.HOST}/api/v1/assessments/${UUID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const res = await req.json()
        setAssessmentData(res.tests)
      } catch {
        console.log("errors")
        setAssessmentData([])
      }
    }, 1000) //SO after create, it can show the changes right after create. Cause take times to UI send, store in DB, then fetch it back to UI
  }

  const createUUID = async () => {
    try {
      const req = await fetch(`${process.env.HOST}/api/v1/assessments/`, {
        method: "POST",
      })
      const res = await req.json()
      setUUID(res.uuid)
    } catch {
      setUUID("")
    }
  }

  useEffect(() => {
    if (UUID) {
      fetchDataAssessment()
      setValueLink("link", `https://salva-vita.vercel.app/${UUID}`) //NEED TO CHANGE THIS LATER, ALSO DEPENEDS ON GET ASSESSMENT UUID GENERATE API
    }
  }, [UUID])

  const handleOnClickModalClose = () => {
    setIsOpenModal(false)
  }

  const handleOnClickModalCreateClose = () => {
    setIsOpenCreateModal(false)
  }

  const onCreateSubmit = (data: any) => {
    console.log("createSubmitData", data)
    const fetchCreateTest = async (data: any) => {
      const constructedObject = {
        ...data,
        assessment_uuid: UUID, //REMOVE LATER, ONLY FOR TESTING
      }
      try {
        const req = await fetch(`${process.env.HOST}/api/v1/tests/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(constructedObject),
        })
        const res = await req.json()
      } catch {}
    }
    fetchCreateTest(data)
    fetchDataAssessment()
  }
  return (
    <Layout>
      <Flex>
        <PageTitle
          title="Create Assessment"
          description="You can generate assessment, and create question here"
        />
        <ButtonContainerTitle>
          <CustomButton
            type="submit"
            onClick={() => {
              createUUID()
            }}
            sx={{ padding: "8px 22px" }}
            variant="outlined"
          >
            Generate ID
          </CustomButton>
          <CustomButton
            type="submit"
            onClick={() => {
              setIsOpenModal(true)
            }}
            sx={{ padding: "8px 22px" }}
            variant="contained"
          >
            Share private link
          </CustomButton>
        </ButtonContainerTitle>
      </Flex>

      <ModalWrapper
        title="Share private link"
        onClickCallBack={handleOnClickModalClose}
        isOpen={isOpenModal}
      >
        <FormGenContainer>
          <CustomTextField
            control={controlLink}
            name="link"
            label="Private Assessment Link"
            type="text"
            variant="outlined"
            sx={{ marginBottom: "24px" }}
          />
        </FormGenContainer>
      </ModalWrapper>

      {assessmentData?.map((assessment: any, i: number) => (
        <AssessmentCardAdmin key={i} assessment={assessment} />
      ))}

      <ModalWrapper
        title="Add a Test"
        onClickCallBack={handleOnClickModalCreateClose}
        isOpen={isOpenCreateModal}
      >
        <FormCreateContainer onSubmit={handleSubmitCreate(onCreateSubmit)}>
          <CustomTextField
            control={controlCreate}
            name="title"
            label="Title"
            type="text"
            variant="outlined"
          />

          <CustomTextField
            control={controlCreate}
            name="description"
            label="Description"
            type="text"
            variant="outlined"
          />

          <Controller
            name="type"
            defaultValue={"MOTIVATION_TEST"}
            control={controlCreate}
            render={({ field }) => (
              <Select labelId="level-label" {...field} sx={{ width: "100%" }}>
                <MenuItem value={"MOTIVATION_TEST"}>MOTIVATION_TEST</MenuItem>
                <MenuItem value={"ENGLISH_TEST"}>ENGLISH_TEST</MenuItem>
                <MenuItem value={"VISIO_PERCEPTUAL_TEST"}>
                  VISIO_PERCEPTUAL_TEST
                </MenuItem>
                <MenuItem value={"SOCIAL_SITUATION_TEST"}>
                  SOCIAL_SITUATION_TEST
                </MenuItem>
              </Select>
            )}
          />

          <CustomButton type="submit" variant="contained">
            Create
          </CustomButton>
        </FormCreateContainer>
      </ModalWrapper>

      <CreateNewTestButton
        onClick={() => {
          setIsOpenCreateModal(true)
        }}
      >
        <AddIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
      </CreateNewTestButton>
    </Layout>
  )
}

export default Assessment

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const FormCreateContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40vw;
  max-width: 500px;
`
const FormGenContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40vw;
  max-width: 500px;
`

const CreateNewTestButton = styled.div`
  display: flex;
  align-self: center;
  border-radius: 50%;
  padding: 23px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  margin: 40px 0;
  cursor: pointer;
  transition: border 0.3s;
  &:hover {
    border: 2px solid #0097f2;
  }
  &:hover svg {
    color: #0097f2;
  }
`

const ButtonContainerTitle = styled.div`
  display: flex;
  gap: 20px;
`
