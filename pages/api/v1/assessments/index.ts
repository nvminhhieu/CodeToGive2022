import type { NextApiRequest, NextApiResponse } from "next"
import { Assessment } from "../../../../types/assessment"

const assessmentsList: Assessment[] = [
  {
    uuid: "42069",
    owner: {
      first_name: "Nguyen",
      last_name: "Hieu",
    },
  },
]

type Data = Assessment[] | { uuid: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Generate UUID, for admin
    const generateUUID = "1234"
    res.status(200).send({ uuid: generateUUID })
    return
  } else if (req.method === "GET") {
    res.status(200).json(assessmentsList)
  }
}
