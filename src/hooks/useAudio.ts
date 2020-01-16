import { useState, useEffect } from "react";

const useAudio = (filename: string) => {
  const [audio] = useState(new Audio(filename));
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [filename, audio, isPlaying]);

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime / audio.duration);
    });
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio.removeEventListener("timeupdate", () => setIsPlaying(false));
    };
  }, [filename, audio]);

  return [isPlaying, toggle, progress];
};

export default useAudio;
