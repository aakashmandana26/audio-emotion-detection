import React, { useContext } from "react";
import { Context } from "../utils/context";

const Comment = () => {
//   const [comment, setComment] = useState("");
const { comment, setComment } = useContext(Context);

  const onComment = (e) => {
    setComment(e.target.value);
    
  };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     // alert("Downloading Excel File.....");
//     console.log("Submitted!!")
//   };
  return (
    <div>
      <label className="text-xl font-bold">
        Comment:{" "}
        <input
          className="border border-gray-200 bg-yellow-100 rounded-xl"
          type="text"
          placeholder=""
          onChange={onComment}
          value={comment}
        />
      </label>
      
    </div>
  );
};

export default Comment;
