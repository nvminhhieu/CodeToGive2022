export interface IAssessment {
  id: string | number
  questions: Question[]
}

export type Question = {
  id: number
  assessment_id: number
  index: number
  description: string
  answered_value: number | undefined
  answer: SilderAnswer
  image?: {
    src: string
    alt: string
  }
}

export type SilderAnswer = {
  assessment_id: string | number
  question_id: string | number
  description: string
  label: string
}
