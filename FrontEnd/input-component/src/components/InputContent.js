import React from "react";
import InputField from "./InputField";

const InputContent = () => {
  return (
    <div className="container">
      <InputField helperText="sm button" value="sm button" size="sm" />
      <InputField helperText="default button" value="default button" />
      <InputField
        helperText="Helper text diabled button"
        value="lg button"
        size="lg"
        disabled
      />
      <InputField
        helperText="full width button"
        value="full width button"
        fullwidth
      />
      <InputField multiline rows="5" />
    </div>
  );
};

export default InputContent;
