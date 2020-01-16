import React, { useState, useCallback } from "react";
import { SOUND_FILES } from "./constants";
import SoundButton from "./SoundButton";

const RandomButton = () => {
  const [randomIdx, setRandomIdx] = useState(0);

  const onClick = useCallback(
    () => setTimeout(() => setRandomIdx(Math.floor(Math.random() * SOUND_FILES.length)), 1000),
    [setRandomIdx],
  );

  return (
    <SoundButton
      {...SOUND_FILES[randomIdx]}
      key={SOUND_FILES[randomIdx].filename}
      buttonText="Random clip!"
      onClick={onClick}
    />
  );
};

export default RandomButton;
