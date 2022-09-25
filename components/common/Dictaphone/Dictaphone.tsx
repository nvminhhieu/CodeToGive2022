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

const Dictaphone = ({ onNext, onPrev }) => {
  const commands = [
    {
      command: "Next",
      callback: onNext,
    },
    {
      command: "Previous",
      callback: onPrev,
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
    <div>
      <CustomIconButton
        _onClick={() => setListening(!isListening)}
        icon={listening ? <MicRounded /> : <MicOffRounded />}
      />
    </div>
  )
}
export default Dictaphone
