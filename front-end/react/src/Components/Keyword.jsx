import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { SayButton } from "react-say";

function Keyword() {
  const [isListening, setIsListening] = useState(false);
  const [storedWords, setStoredWords] = useState("");

  const { transcript } = useSpeechRecognition();

  useEffect(() => {
    // When the stop command is recognized, stop storing words and log them to the console
    if (transcript.includes("stop") && isListening) {
      setIsListening(false);
      setStoredWords(transcript);
    }
  }, [transcript, isListening]);

  return (
    <article>
      <SayButton
        onClick={(event) => console.log(event)}
        speak={storedWords}
        voice={(voices) => [...voices].find((v) => v.lang === "en-US")}
      >
        Tell me a story
      </SayButton>
      <div
        style={{
          width: "100%",
          height: "100px",
          background: isListening ? "green" : "red",
        }}
      />
      <button
        onClick={() => {
          setIsListening(true);
          SpeechRecognition.startListening({ continuous: true });
        }}
      >
        Start Listening
      </button>
      <button
        onClick={() => {
          setIsListening(true);
          SpeechRecognition.startListening({ language: "pt-BR" });
        }}
      >
        Me ouça
      </button>
      <button
        onClick={() => {
          setIsListening(false);
          SpeechRecognition.stopListening();
        }}
      >
        Stop Listening
      </button>
      ---
      <p>{transcript}</p>
      <p>{storedWords}</p>
    </article>
  );
}

export default Keyword;
