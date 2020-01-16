import React, { useCallback } from "react";
import "./SoundButton.css";
import useAudio from "./hooks/useAudio";

export type SoundProps = {
  buttonText: string;
  filename: string;
  onClick?: () => void;
};

const SoundButton: React.FC<SoundProps> = ({ buttonText, filename, onClick }: SoundProps) => {
  const [, toggle] = useAudio(filename);

  const t = useCallback(() => {
    if (onClick) onClick();
    if (typeof toggle === "function") {
      toggle();
    }
  }, [onClick, toggle]);

  return (
    <div>
      <button className="button" onClick={t}>
        {buttonText}
      </button>
    </div>
  );
};

export default SoundButton;
