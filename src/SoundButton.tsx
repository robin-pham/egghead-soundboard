import React, { useState, useEffect } from "react";
import "./App.css";

export type SoundProps = {
  buttonText: string;
  filename: string;
};

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime / audio.duration);
    });
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio.removeEventListener("timeupdate", () => setIsPlaying(false));
    };
  }, []);

  return [isPlaying, toggle, progress];
};

const SoundButton: React.FC<SoundProps> = ({ buttonText, filename }: SoundProps) => {
  const [isPlaying, toggle, progress] = useAudio(filename);

  const t = typeof toggle === "function" ? toggle : () => {};

  return (
    <div className="Sound">
      <button onClick={t}>{buttonText}</button>
    </div>
  );
};

export default SoundButton;
