export interface IAssessment {
  id: string | number
  title: string
  questions: Question[]
}

export type Question = {
  id: string | number
  assessment_id: string | number
  index: number
  description: string
  answers: Answer[]
  answered_index: number | null
}

export type Answer = {
  id: string | number
  index: number
  assessment_id: string | number
  question_id: string | number
  description: string
  scores: any
  image: {
    src: string
    alt: string
  }
}
