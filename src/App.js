import Checkbox from "./components/Checkbox";
import Audioplayer from "./components/Audioplayer";
import Comment from "./components/Comment";
import { useState } from "react";

function App() {
  const [objectData, setObjectData] = useState({});

  return (
    <div className="bg-yellow-200 justify-center h-screen">
      <h1 className="text-6xl justify-center flex py-10 font-semibold">
        File Emotion Detection
      </h1>
      <div className="p-3 justify-center ">
            <div className="flex justify-center pb-10" ><Audioplayer /></div>
        <div className="">
          <div className="justify-center flex p-2 space-x-5">
            <Checkbox id="checkbox1" value="Anger" name="Anger" />
            <Checkbox id="checkbox2" value="Happy" name="Happy" />
            <Checkbox id="checkbox3" value="Neutral" name="Neutral" />
            <Checkbox id="checkbox4" value="Sad" name="Sad" />
            <Checkbox id="checkbox5" value="Fear" name="Fear" />
            <Checkbox id="checkbox6" value="Disgust" name="Disgust" />
            <Checkbox id="checkbox7" value="Surprised" name="Surprised" />
            <Checkbox id="checkbox8" value="Not Sure" name="Not Sure" />
            <Checkbox id="checkbox9" value="Not Audible" name="Not Audible" />
          </div>
          <div className="flex justify-center py-5">
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
