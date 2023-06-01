import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const Audioplayer = () => {
  const [audio, setAudio] = useState("");

  const audioSelect = (e) => {
    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setAudio(objectUrl);
    console.log(objectUrl);
  };

  return (
    <div className="flex items-center space-x-10 p-2">
      <ReactAudioPlayer src={audio} autoPlay controls />
      <div>
        <label>
          Choose File:{" "}
          <input type="file" onChange={audioSelect} accept=".wav" />
        </label>
      </div>
    </div>
  );
};

export default Audioplayer;
