export interface ITest {
  test_id: string | number
  title: string
  type: "MOTIVATION_TEST" | string
  questions: Question[]
}

export type Question = {
  type: string | "MOTIVATION_QUESTION"
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
