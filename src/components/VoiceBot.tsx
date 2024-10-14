import React, { useState } from "react";
import { voiceBotStyles } from "./VoicebotStyles";

interface VoiceBotProps {
  id: string;
}

const VoiceBot: React.FC<VoiceBotProps> = ({ id }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const toggleListening = () => {
    setIsListening(!isListening);
    // Implement voice recognition logic here
  };

  const sendMessage = async () => {
    // Implement sending message to server here
    // You can now use the `id` when sending requests to your server
    console.log(`Sending message with ID: ${id}`);
    setResponse(`Echo: ${transcript}`);
    setTranscript("");
  };

  return (
    <>
      <style>{voiceBotStyles}</style>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Voice Assistant</h2>
        </div>
        <div className="card-content">
          <div className="response-area">{response && <p>{response}</p>}</div>
          <div className="transcript-area">
            <div className="transcript">
              <p>{transcript}</p>
            </div>
            <button
              className="button button-outline button-icon"
              onClick={toggleListening}
            >
              {isListening ? "Stop" : "Start"}
            </button>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="button button-primary w-full"
            onClick={sendMessage}
            disabled={!transcript}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default VoiceBot;
