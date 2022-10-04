import AssessmentCardAdmin from "../../../components/Assessments/AssessmentCardAdmin"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { assessments as mock_assessment } from "../../../data/assessment_display"

const Assessment = () => {
  return (
    <Layout title="Assessments (Admin)">
      <PageTitle
        title="Assessments"
        description="You can the control assessments, and create questions here"
      />
      <div style={{ paddingBottom: "100px" }}>
        {mock_assessment.map((assessment, i) => (
          <AssessmentCardAdmin key={i} assessment={assessment} />
        ))}
      </div>
    </Layout>
  )
}

export default Assessment
