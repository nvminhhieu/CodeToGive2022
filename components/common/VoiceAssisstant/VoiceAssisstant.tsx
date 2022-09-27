import React, { useEffect, useState } from "react"
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { CustomIconButton } from "../CustomIconButton/CustomIconButton"
import { MicOffRounded, MicRounded } from "@mui/icons-material"

const appId = "d1a2c48b-bacf-407b-9811-26b11be721d0"
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

type VoiceAssisstantProps = {
  onNext: () => void
  onPrev: () => void
  text: string
}

const VoiceAssisstant = ({ onNext, onPrev, text }: VoiceAssisstantProps) => {
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg: any) => {
    msg.text = text
    window.speechSynthesis.speak(msg)
  }

  const commands = [
    {
      command: "Next",
      callback: () => {
        onNext()
        speechHandler(msg)
      },
    },
    {
      command: "Back",
      callback: () => {
        onPrev()
        speechHandler(msg)
      },
    },
  ]

  const [isListening, setListening] = useState(false)
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands })
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true })

  useEffect(() => {
    isListening ? startListening() : SpeechRecognition.stopListening()
    console.log(transcript)
  }, [isListening, transcript])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>
  }

  return (
    <CustomIconButton
      _onClick={() => setListening(!isListening)}
      icon={listening ? <MicRounded /> : <MicOffRounded />}
      align="self-end"
    />
  )
}
export default VoiceAssisstant
