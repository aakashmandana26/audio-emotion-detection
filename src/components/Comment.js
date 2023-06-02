import React, { useContext } from "react";
import { Context } from "../utils/context";

const Comment = () => {
const { comment, setComment } = useContext(Context);

  const onComment = (e) => {
    setComment(e.target.value);
  };

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
