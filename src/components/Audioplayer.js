import React, { useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Context } from "../utils/context";


const Audioplayer = () => {
  // const [audio, setAudio] = useState("");
  const { audio, setAudio} = useContext(Context);


  const audioSelect = (e) => {
    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setAudio(objectUrl);


  };

  return (
    <div className="flex items-center space-x-10 p-2">
      <ReactAudioPlayer src={audio} autoPlay controls />
      <div className="cursor-pointer">
        <label className="text-lg font-semibold">
          Choose File:{" "}
          <input  type="file" onChange={audioSelect} accept=".wav" />
        </label>
      </div>
    </div>
  );
};

export default Audioplayer;
