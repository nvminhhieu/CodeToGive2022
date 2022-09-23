import { AssessmentCard } from "../../components/Assessments/AssessmentCard"
import PageTitle from "../../components/Common/PageTitle"
import Layout from "../../components/Layout"
import { assessments } from "../../data/assessment_display"

const AssessmentsPage = () => {
  return (
    <Layout>
      <PageTitle
        title="Assessments"
        description="Here you can find the assessments required to get a job. Please select the test you would like to do."
      />
      {assessments.map((assessment, i) => (
        <AssessmentCard key={i} assessment={assessment} />
      ))}
    </Layout>
  )
}

export default AssessmentsPage
