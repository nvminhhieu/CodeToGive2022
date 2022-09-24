import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import TranslateIcon from "@mui/icons-material/Translate"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined"

export const assessments = [
  {
    title: "Work motivation test",
    description:
      "Tell more about your interests so you can find the most suitable job.",
    completed: false,
    icon: {
      name: WorkOutlineIcon,
      color:
        "radial-gradient(102.34% 102.34% at 50% 50%, #3BC49A 0%, #158787 100%)",
    },
    progress: 20,
  },
  {
    title: "English language test",
    description:
      "You will be asked some questions about English situations to measure your knowledge.",
    completed: false,
    icon: {
      name: TranslateIcon,
      color:
        "radial-gradient(102.34% 102.34% at 50% 50%, #DA87AF 0%, #802C59 100%)",
    },
    progress: 0,
  },
  {
    title: "Visio-perceptual skills",
    description: "We will measure your sight and hearing.",
    completed: false,
    icon: {
      name: VisibilityOutlinedIcon,
      color:
        "radial-gradient(102.34% 102.34% at 50% 50%, #1D66D3 0%, #06459F 100%)",
    },
    progress: 80,
  },
  {
    title: "Some other test",
    description: "This is some other random test to observe your capabilities.",
    completed: true,
    icon: {
      name: QuizOutlinedIcon,
      color:
        "radial-gradient(102.34% 102.34% at 50% 50%, #8B7560 0%, #58390A 100%)",
    },
    progress: 100,
  },
]
