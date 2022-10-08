import type { NextApiRequest, NextApiResponse } from "next"
import { assessments as mock_display_tests } from "../../../../data/assessment_display"
import { mockQuestions } from "../../../../data/work_motivation_questions"
import { Assessment, ITestDisplay } from "../../../../types/assessment"

interface DetailedAssessment extends Assessment {
  tests: ITestDisplay[]
}

const listMockAssessment: DetailedAssessment[] = [
  {
    uuid: "42069", //Need to change this to dynamic uuid later
    owner: {
      first_name: "Nguyen",
      last_name: "Hieu",
    },
    tests: mock_display_tests,
  },
  {
    uuid: "1234", //Need to change this to dynamic uuid later
    owner: {
      first_name: "Lmao",
      last_name: "Hieu",
    },
    tests: mock_display_tests,
  },
]

type Data = DetailedAssessment | undefined

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uuid } = req.query

  const searchedAssessment = listMockAssessment.find((e) => e.uuid === uuid)

  res.status(200).json(searchedAssessment)
}
