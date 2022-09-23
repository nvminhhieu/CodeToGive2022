import styled from "@emotion/styled"
import { useState } from "react"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
import QuestionCard from "../../components/QuestionCard"
import RecommendedProfessions from "../../components/RecommendedProfessions"

const WorkMotivation = () => {
  const [isOpenRecommended, setIsOpenRecommended] = useState(false)
  return (
    <Layout>
      <PageTitle
        title="Work motivation test"
        description={
          <>
            Tell more about your interests so you can find the most suitable
            job.
          </>
        }
      />
      <div onClick={() => setIsOpenRecommended(!isOpenRecommended)}>Toggle</div>
      <QuestionCard />
      <Spacer />
      {isOpenRecommended ? <RecommendedProfessions /> : null}
    </Layout>
  )
}

export default WorkMotivation

const Spacer = styled.div`
  width: 100%;
  height: 500px;
`
