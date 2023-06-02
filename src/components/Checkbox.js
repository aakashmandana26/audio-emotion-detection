import React, { useContext } from "react";
import { Context } from "../utils/context";


const Checkbox = ({ id, name, value }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("");
const { isChecked, setIsChecked, selectedValue, setSelectedValue } = useContext(Context);


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
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
          checked={isChecked}
          onChange={handleCheckboxChange}
        />{' '}
        {value}
      </label>
    </div>
  );
};

export default Checkbox;
