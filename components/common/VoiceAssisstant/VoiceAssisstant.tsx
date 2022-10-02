import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { CustomIconButton } from "../CustomIconButton/CustomIconButton"
import { MicOffRounded, MicRounded } from "@mui/icons-material"
import { ROUTES } from "../../../routing/routes"
import { useRouter } from "next/router"

const appId = process.env.NEXT_PUBLIC_SPEECHLY_APP_ID
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId ?? "")
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)
export const speak = (text: string) => {
  const speech = new SpeechSynthesisUtterance(text)
  window.speechSynthesis.speak(speech)
}
type Props = {
  specificCommands?: any
  specificMessage?: string
  assisstant: boolean
}

const VoiceAssisstant = ({
  specificCommands = [],
  specificMessage,
  assisstant,
}: Props) => {
  const router = useRouter()
  const [message, setMessage] = useState("")

  const commands = [
    {
      command: "Hi",
      callback: () => {
        speak("Hi, how can I help you?")
        setMessage("Hi, how can I help you?")
      },
    },
    {
      command: "Assessments page",
      callback: () => {
        speak("Okay, taking you to assessments page.")
        setMessage("Okay, taking you to assessments page.")
        router.push(ROUTES.assessments)
      },
    },
    {
      command: "Work motivation test",
      callback: () => {
        speak("Okay, opening work motivation test.")
        setMessage("Okay, opening work motivation test.")
        router.push(ROUTES.workMotivation)
      },
    },
    ...specificCommands,
  ]

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands })

  useEffect(() => {
    if (assisstant) {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      })
    } else {
      SpeechRecognition.stopListening()
    }
  }, [])

  console.log(listening)

  useEffect(() => {
    setTimeout(() => setMessage(""), 5000)
  }, [])

  console.log(transcript)
  console.log(commands)

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>
  }

  return (
    <>
      <CustomIconButton icon={<MicRounded />} right="2vh" />
      {/* 
      {message !== "" && <Text>{message}</Text>}
      {specificMessage !== "" && <Text>{specificMessage}</Text>} */}
    </>
  )
}
export default VoiceAssisstant

// const Text = styled.div`
//   position: fixed;
//   bottom: 4vh;
//   right: 14vh;
//   background: #ffffff;
//   box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
//     0px 15px 17px -1px rgba(5, 125, 236, 0.1);
//   padding: 10px;
//   border-radius: 20px;
//   font-size: 14px;
//   font-weight: 400;
// `
