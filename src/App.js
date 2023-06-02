import Checkbox from "./components/Checkbox";
import Audioplayer from "./components/Audioplayer";
import Comment from "./components/Comment";
import React, { useContext } from "react";
import { Context } from "./utils/context";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";



function App() {
  const { objectData, selectedValue, setObjectData, audio, comment } =
    useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    setObjectData({ ...objectData, emotion: selectedValue, audio, comment });
    alert("Downloading.....");
    convertToExcel();
    console.log(objectData)
  };

  const convertToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const data = [Object.keys(objectData), Object.values(objectData)];
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "data.xlsx");
  };
  

  console.log(objectData);

  return (
    <div className="bg-yellow-200 justify-center h-screen">
      <h1 className="text-6xl justify-center flex py-10 font-semibold">
        File Emotion Detection
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="p-3 justify-center ">
          <div className="flex justify-center pb-10">
            <Audioplayer />
          </div>
          <div className="justify-center flex p-2 space-x-5 cursor-pointer">
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
          <div className="flex justify-center pt-10 align-middle space-x-5">
            <Comment />
            <div>
              <button
                className="border border-gray-200 bg-yellow-100 rounded-lg text-lg font-semibold cursor-pointer"
                type="submit"
              >
                Save & Check
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
