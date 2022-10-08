import type { NextApiRequest, NextApiResponse } from "next"
import { Assessment } from "../../../../types/assessment"

const assessments: Assessment[] = [
  {
    uuid: "42069",
    owner: {
      first_name: "Nguyen",
      last_name: "Hieu",
    },
  },
]

type Data = Assessment[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(assessments)
}
