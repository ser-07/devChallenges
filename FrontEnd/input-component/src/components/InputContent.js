import React from "react";
import InputField from "./InputField";
import "../styles/inputStyles.css";

const InputContent = () => {
  return (
    <div className="container">
      <div className="inp-row">
        <InputField helperText="sm input" value="sm input" size="sm" />
        <InputField helperText="default input" value="default input" />
        <InputField
          helperText="Helper text diabled input"
          value="lg input"
          size="lg"
          disabled
        />
      </div>
      <div className="inp-row">
        <InputField
          helperText="primary input color"
          value="primary input"
          color="primary"
        />
        <InputField
          helperText="secondary input"
          value="secondary input"
          color="secondary"
        />
        <InputField
          helperText="default input"
          value="default input"
          color="default"
        />
        <InputField
          helperText="success input"
          value="success input"
          color="success"
        />
      </div>
      <div className="inp-row">
        <InputField
          helperText="disabled input"
          value="disabled input"
          disabled
        />
        <InputField helperText="error input text" value="error input" error />
      </div>
      <div className="inp-row">
        <InputField
          helperText="full width input"
          value="full width input"
          fullwidth
        />
      </div>

      <div className="inp-row">
        <InputField
          helperText="Phone icon input"
          value="default input"
          startIcon={"phone"}
        />
        <InputField
          helperText="search icon input"
          value="default input"
          endIcon="search"
        />
        <InputField
          helperText="icon input"
          value="default input"
          endIcon="amount"
        />
        <InputField
          helperText="icon input"
          value="default input"
          startIcon="card"
        />
        <InputField
          helperText="icon input"
          value="default input"
          endIcon="link"
        />
      </div>
      <InputField multiline rows="5" />
    </div>
  );
};
  
export default InputContent;
