export interface Assessment {
  uuid: string
  owner?: {
    last_name: string
    first_name: string
  }
}

export interface ITestDisplay {
  test_id: string | number
  title: string
  type:
    | "MOTIVATION_TEST"
    | "ENGLISH_TEST"
    | "VISIO_PERCEPTUAL_TEST"
    | "SOCIAL_SITUATION_TEST"
  questions: any
  progress: number
  completed: boolean
  description: string
  assessment_uuid: string
}

export interface ITest {
  test_id: string | number
  title: string
  type:
    | "MOTIVATION_TEST"
    | "ENGLISH_TEST"
    | "VISIO_PERCEPTUAL_TEST"
    | "SOCIAL_SITUATION_TEST"
    | string
  questions: Question[]
}

export type Question = {
  labels?: any
  type:
    | string
    | "MOTIVATION_QUESTION"
    | "ENGLISH_QUESTION"
    | "VISIO_PERCEPTUAL_QUESTION"
    | "SOCIAL_SITUATION_QUESTION"
  question_id: number
  description: string
  answered_id?: number | null
  answers: Answer[]
  image?: {
    src: string
    alt: string
  } | null
}

export type Answer = {
  answer_id: number
  description: string
  question_id: number
}
