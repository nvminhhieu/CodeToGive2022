export interface ITest {
  test_id: string | number
  title: string
  questions: Question[]
}

export type Question = {
  type: string
  question_id: number
  description: string
  answered_value?: number
  answers: Answer[]
  image?: {
    src: string
    alt: string
  }
}

export type Answer = {
  answer_id: number
  description: string
  question_id: number
}
