import type { NextApiRequest, NextApiResponse } from "next"
import { mockQuestions } from "../../../../../../../data/work_motivation_questions"
import { ITest } from "../../../../../../../types/assessment"

// Use to display the assessment, at /[uuid] page

const mockTest: ITest = {
  test_id: 1,
  title: "Work motivation test",
  type: "MOTIVATION_TEST",
  questions: mockQuestions,
}

type Data = ITest | undefined

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { test_id } = req.query

  res.status(200).json(mockTest)
}
