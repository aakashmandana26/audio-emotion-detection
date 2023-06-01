import React, { useState } from 'react';

const Checkbox = ({ id, name, value }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked)
  };

  return (
    <div className="space-x-2">
      <label>
        <input
          type="radio"
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
