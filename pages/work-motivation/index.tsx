import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
import RecommendedProfessions from "../../components/RecommendedProfessions"

const WorkMotivation = () => {
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
      <RecommendedProfessions />
    </Layout>
  )
}

export default WorkMotivation
