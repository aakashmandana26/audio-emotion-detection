import React, { useContext } from "react";
import { Context } from "../utils/context";


const Checkbox = ({ id, name, value }) => {

const { selectedValue, setSelectedValue } = useContext(Context);


  const handleCheckboxChange = (event) => {
    setSelectedValue(event.target.value)
    console.log(selectedValue)
  };

  return (
    <div className="space-x-2">
      <label>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={handleCheckboxChange}
        />{' '}
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
