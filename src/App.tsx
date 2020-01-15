import React from "react";
import "./App.css";
import { SOUND_FILES } from "./constants";
import SoundButton from "./SoundButton";

const App: React.FC = () => {
  return (
    <div className="App">
      {SOUND_FILES.map(soundProp => (
        <SoundButton {...soundProp} />
      ))}
    </div>
  );
};

export default App;
