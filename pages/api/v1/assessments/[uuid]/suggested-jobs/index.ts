import type { NextApiRequest, NextApiResponse } from "next"
import IJob from "../../../../../../types/job"
import { assessments as mock_display_tests } from "../../../../../data/assessment_display"
import { Assessment, ITestDisplay } from "../../../../../types/assessment"

interface DetailedAssessment extends Assessment {
  tests: ITestDisplay[]
}

// Use to display the assessment, at /[uuid] page

const listMockSuggestedJobs: IJob[] = [
  {
    job_id: 2,
    title: "Recptionist",
    labels: null,
    image:
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjZXB0aW9uaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    job_id: 3,
    title: "Bartender",
    labels: null,
    image:
      "https://images.unsplash.com/photo-1595751866979-de6e9d606220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFydGVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    job_id: 1,
    title: "Librarian",
    labels: null,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    job_id: 4,
    title: "Software Engineer",
    labels: null,
    image:
      "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    job_id: 5,
    title: "Barista",
    labels: null,
    image:
      "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
]

type Data = IJob[]

function shuffle(array: IJob[]) {
  let currentIndex = array.length
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * array.length)
    currentIndex -= 1
    const temp = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temp
  }
  return array
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uuid } = req.query

  const randomizeSuggestedJob = shuffle(listMockSuggestedJobs)

  res.status(200).json(randomizeSuggestedJob)
}
