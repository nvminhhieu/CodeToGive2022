import styled from "@emotion/styled"
import { useState } from "react"
import AssessmentCardAdmin from "../../../components/Assessments/AssessmentCardAdmin"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { assessments as mock_assessment } from "../../../data/assessment_display"
import { Question } from "../../../types/assessment"
import CustomButton from "../../../components/common/CustomButton/CustomButton"
import ModalWrapper from "../../../components/common/Modal"
import CustomTextField from "../../../components/common/CustomTextField/CustomTextField"
import { Controller, useForm } from "react-hook-form"
import { MenuItem, Select } from "@mui/material"

const Assessment = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
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

  const handleOnClickModalClose = () => {
    setIsOpenModal(false)
  }

  const handleOnClickModalCreateClose = () => {
    setIsOpenCreateModal(false)
  }

  const onCreateSubmit = (data) => {
    console.log("createSubmitData", data)
  }
  return (
    <Layout>
      <Flex>
        <PageTitle
          title="Assessment"
          description="You can control assessment, and create question here"
        />
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
      </Flex>

      <ModalWrapper
        title="Share private link"
        onClickCallBack={handleOnClickModalClose}
        isOpen={isOpenModal}
      >
        <CustomTextField
          style={{ width: "30vw" }}
          control={controlLink}
          name="name"
          label="Full name"
          type="text"
          variant="outlined"
          sx={{ marginBottom: "24px" }}
        />
      </ModalWrapper>

      {mock_assessment.map((assessment, i) => (
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

      {mock_assessment.map((assessment, i) => (
        <AssessmentCardAdmin key={i} assessment={assessment} />
      ))}

      <button
        onClick={() => {
          setIsOpenCreateModal(true)
        }}
      >
        Create new Test
      </button>
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
