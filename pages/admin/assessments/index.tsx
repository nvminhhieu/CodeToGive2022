import AssessmentCardAdmin from "../../../components/Assessments/AssessmentCardAdmin"
import PageTitle from "../../../components/common/PageTitle"
import Layout from "../../../components/Layout"
import { assessments as mock_assessment } from "../../../data/assessment_display"

const Assessment = () => {
  return (
    <Layout>
      <PageTitle
        title="Assessment"
        description="You can control assessment, and create question here"
      />

      {mock_assessment.map((assessment, i) => (
        <AssessmentCardAdmin key={i} assessment={assessment} />
      ))}
    </Layout>
  )
}

export default Assessment
