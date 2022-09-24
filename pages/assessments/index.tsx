import { AssessmentCard } from "../../components/Assessments/AssessmentCard"
import { AssessmentResultCard } from "../../components/Assessments/AssessmentResultCard"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
import { assessments } from "../../data/assessment_display"

const AssessmentsPage = () => {
  return (
    <Layout>
      <PageTitle
        title="Assessments"
        description="Here you can find the assessments required to get a job. Please select the test you would like to do."
      />
      <div style={{ paddingBottom: "100px" }}>
        <AssessmentResultCard isCompleted={true} />
        {assessments.map((assessment, i) => (
          <AssessmentCard key={i} assessment={assessment} />
        ))}
      </div>
    </Layout>
  )
}

export default AssessmentsPage
