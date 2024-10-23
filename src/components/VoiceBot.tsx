import React, { useState, useRef, useEffect } from "react";
import { voiceBotStyles } from "./VoiceBotStyles";

interface VoiceBotProps {
  id: string;
}

const VoiceBot: React.FC<VoiceBotProps> = ({ id }) => {
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioData, setAudioData] = useState<string | null>(null);
  const [bars, setBars] = useState([0.1, 0.1, 0.1, 0.1, 0.1]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number>();

  const sendMessage = async () => {
    try {
      const response = await fetch("https://demo.zaplineai.com/api/speak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          id: id,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioData(audioUrl);

      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const updateBars = () => {
        // Simulate audio visualization with random values
        const newBars = bars.map(() => Math.random() * 0.8 + 0.2);
        setBars(newBars);
        animationFrameRef.current = requestAnimationFrame(updateBars);
      };

      animationFrameRef.current = requestAnimationFrame(updateBars);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setBars([0.1, 0.1, 0.1, 0.1, 0.1]);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <style>{voiceBotStyles}</style>
      <div className="zap-card">
        <div className="zap-card-header">
          <h2 className="zap-card-title">Voice Assistant</h2>
        </div>
        <div className="zap-card-content">
          <textarea
            className="zap-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />

          {audioData && (
            <audio
              ref={audioRef}
              src={audioData}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              style={{ display: "none" }}
            />
          )}

          <div className="zap-spectogram">
            {bars.map((height, index) => (
              <div
                key={index}
                className="zap-spectogram-bar"
                style={{ height: `${height * 100}%` }}
              />
            ))}
          </div>
        </div>
        <div className="zap-card-footer">
          <button
            className="zap-button zap-button-primary zap-w-full"
            onClick={sendMessage}
            disabled={!message.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default VoiceBot;
