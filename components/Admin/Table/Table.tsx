import styled from "@emotion/styled"
import React from "react"
import EditIcon from "@mui/icons-material/Edit"
import { Question } from "../../../types/assessment"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

type Props = {
  questionsData: Question[]
}

const Table = ({ questionsData }: Props) => {
  return (
    <GridContainer>
      <span className="Position">#</span>
      <span className="Question">Question</span>
      <span className="Type">Type</span>
      <span className="Answers"> Answers</span>
      <span className="Tags">Tags</span>
      <span className="Image">Image</span>
      <span />

      {questionsData.map((question, ind) => (
        <React.Fragment key={ind}>
          <p>{ind + 1}</p>
          <p>{question.description}</p>
          <p>{question.type}</p>
          <p>{question.answers.map((e) => e.description + " ")}</p>
          <p>{question.type}</p>
          <p>{question.image?.src}</p>
          <ButtonsContainer>
            <EditButton>
              <EditIcon sx={{ color: "white", fontSize: "20px" }} />
            </EditButton>
            <DeleteButton>
              <DeleteOutlineIcon sx={{ color: "#ff0000", fontSize: "20px" }} />
            </DeleteButton>
          </ButtonsContainer>
        </React.Fragment>
      ))}
    </GridContainer>
  )
}

export default Table

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 200px 1fr 2fr 2fr 2fr auto;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 18px;
  }
  & > * {
    min-width: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #d5d9e0;
    padding: 20px;
    overflow: hidden;

    text-overflow: ellipsis;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

const EditButton = styled.div`
  padding: 11px;
  display: flex;
  background: #0097f2;
  box-shadow: 0px 2px 5px rgba(68, 33, 1, 0.1);
  border-radius: 8px;
  cursor: pointer;
`

const DeleteButton = styled.div`
  padding: 11px;
  display: flex;
  background: #ffffff;
  border: 1px solid #ff0000;
  box-shadow: 0px 2px 5px rgba(68, 33, 1, 0.1);
  border-radius: 8px;
  cursor: pointer;
`
