import { AssessmentCard } from "../../components/Assessments/AssessmentCard/AssessmentCard"
import { AssessmentResultCard } from "../../components/Assessments/AssessmentResultCard/AssessmentResultCard"
import PageTitle from "../../components/Common/PageTitle"
import Layout from "../../components/Layout"
import { assessments } from "../../data/assessment_display"
import { speak } from "../../components/Common/VoiceAssisstant/VoiceAssisstant"

const AssessmentsPage = () => {
  const incomplete = assessments.filter(
    (assessment) => assessment.progress < 100
  )

  const commands = [
    [
      {
        command: "Next",
        callback: () => {
          speak("Next question")
        },
      },
    ],
    [
      {
        command: "Previous",
        callback: () => {
          speak("Previous question")
        },
      },
    ],
  ]

  return (
    <Layout commands={commands[0]}>
      <PageTitle
        title="Assessments"
        description="Here you can find the assessments required to get a job. Please select the test you would like to do."
      />
      <div style={{ paddingBottom: "100px" }}>
        <AssessmentResultCard isCompleted={incomplete.length === 0} />
        {assessments.map((assessment, i) => (
          <AssessmentCard key={i} assessment={assessment} />
        ))}
      </div>
    </Layout>
  )
}

export default AssessmentsPage
