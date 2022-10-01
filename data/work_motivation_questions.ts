import { ITest } from "../types/assessment"

export const test: ITest = {
  test_id: 1,
  title: "Work motivation test",
  questions: [
    {
      type: "MOTIVATION_QUESTION",
      description: "Question1",
      question_id: 12,
      answered_value: 125,
      answers: [
        {
          description: "1",
          answer_id: 123,
          question_id: 12,
          test_id: 1,
        },
        {
          description: "2",
          answer_id: 124,
          question_id: 12,
          test_id: 1,
        },
        {
          description: "3",
          answer_id: 125,
          question_id: 12,
          test_id: 1,
        },
        {
          description: "4",
          answer_id: 126,
          question_id: 12,
          test_id: 1,
        },
        {
          description: "5",
          answer_id: 127,
          question_id: 12,
          test_id: 1,
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjZXB0aW9uaXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Alt text",
      },
    },
    {
      type: "MOTIVATION_QUESTION",
      description: "Question2",
      question_id: 13,

      answers: [
        {
          description: "1",
          answer_id: 128,
          question_id: 13,
          test_id: 1,
        },
        {
          description: "2",
          answer_id: 129,
          question_id: 13,
          test_id: 1,
        },
        {
          description: "3",
          answer_id: 130,
          question_id: 13,
          test_id: 1,
        },
        {
          description: "4",
          answer_id: 131,
          question_id: 13,
          test_id: 1,
        },
        {
          description: "5",
          answer_id: 132,
          question_id: 13,
          test_id: 1,
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1664555723834-ec251e81a3ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199&q=80",
        alt: "Alt text",
      },
    },
    {
      type: "MOTIVATION_QUESTION",
      description: "Question3",
      question_id: 14,

      answers: [
        {
          description: "1",
          answer_id: 133,
          question_id: 14,
          test_id: 1,
        },
        {
          description: "2",
          answer_id: 134,
          question_id: 14,
          test_id: 1,
        },
        {
          description: "3",
          answer_id: 135,
          question_id: 14,
          test_id: 1,
        },
        {
          description: "4",
          answer_id: 136,
          question_id: 14,
          test_id: 1,
        },
        {
          description: "5",
          answer_id: 137,
          question_id: 14,
          test_id: 1,
        },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1657299143471-231353519c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Alt text",
      },
    },
  ],
}
