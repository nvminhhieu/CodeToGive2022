import { useEffect, useState } from "react"
import { AssessmentCard } from "../../components/Assessments/AssessmentCard/AssessmentCard"
import { AssessmentResultCard } from "../../components/Assessments/AssessmentResultCard/AssessmentResultCard"
import PageTitle from "../../components/Common/PageTitle"
import Layout from "../../components/Layout"
import { useUUIDContext } from "../../context/UUIDContext"
import { assessments as mock_assessment } from "../../data/assessment_display"

const AssessmentsPage = () => {
  const { uuid } = useUUIDContext()
  const [assessments, setAssessments] = useState<typeof mock_assessment>([])

  useEffect(() => {
    const fetchAssessmentData = async () => {
      try {
        const req = await fetch(
          `${process.env.HOST}/api/v1/${uuid}/assessments`
        )
        const res = await req.json()
        setAssessments(res)
      } catch {
        setAssessments(mock_assessment)
      }
    }
    if (uuid) {
      fetchAssessmentData()
    }
  }, [uuid])

  return (
    <Layout>
      <PageTitle
        title="Assessments"
        description="Here you can find the assessments required to get a job. Please select the test you would like to do."
      />
      <div style={{ paddingBottom: "100px" }}>
        <AssessmentResultCard isCompleted={false} />
        {assessments.map((assessment, i) => (
          <AssessmentCard key={i} assessment={assessment} />
        ))}
      </div>
    </Layout>
  )
}

export default AssessmentsPage
