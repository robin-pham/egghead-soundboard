import React from "react";
import "./App.css";
import { SOUND_FILES } from "./constants";
import SoundButton from "./SoundButton";
import RandomButton from "./RandomButton";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="grid">
        {SOUND_FILES.map(soundProp => (
          <SoundButton {...soundProp} />
        ))}
        <RandomButton />
      </div>
    </div>
  );
};

export default App;
