import { useState } from "react"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
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
      {isOpenRecommended ? <RecommendedProfessions /> : null}
    </Layout>
  )
}

export default WorkMotivation
