import styled from "@emotion/styled"
import React from "react"
import { Question } from "../../../types/assessment"

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
          <p>{question.answered_id}</p>
          <p>{question.type}</p>
          <p>{question.type}</p>
          <p>{question.type}</p>
        </React.Fragment>
      ))}
    </GridContainer>
  )
}

export default Table

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 200px 1fr 2fr 2fr 2fr 3fr;
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
