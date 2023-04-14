import React, { useState } from "react";

const DynamicInputField = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleInputChange = (e, index) => {
    const values = [...inputFields];
    values[index].value = e.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  return (
    <div>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <input
            type="text"
            value={inputField.value}
            onChange={(e) => handleInputChange(e, index)}
          />
          <button type="button" onClick={handleAddField}>
            Add Field
          </button>
        </div>
      ))}
    </div>
  );
};

export default DynamicInputField;
