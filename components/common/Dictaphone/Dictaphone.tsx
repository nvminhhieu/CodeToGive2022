import React, { useEffect, useState } from "react"
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"

const appId = "d1a2c48b-bacf-407b-9811-26b11be721d0"
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const Dictaphone = () => {
  const [isListening, setListening] = useState(false)
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition()
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
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => setListening(!isListening)}>Turn on mic</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone
