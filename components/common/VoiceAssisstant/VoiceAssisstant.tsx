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
}

const VoiceAssisstant = ({ onNext, onPrev }: VoiceAssisstantProps) => {
  const voices = () => {
    const voices = speechSynthesis.getVoices()
    const voice = voices.filter((v) => v.name === "Google UK English Female")
    return voice[0]
  }

  voices()
  const speak = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text)
    speech.voice = voices()
    speech.lang = "en-US"
    speech.rate = 0.9
    window.speechSynthesis.speak(speech)
  }

  const commands = [
    {
      command: "Next",
      callback: () => {
        speak("Next question")
        onNext()
      },
    },
    {
      command: "Back",
      callback: () => {
        onPrev()
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
    />
  )
}
export default VoiceAssisstant
