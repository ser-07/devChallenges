import React from "react";
import "../styles/inputStyles.css";

const InputField = ({
  color,
  size,
  startIcon,
  endIcon,
  disabled,
  helperText,
  value,
  multiline,
  fullwidth,
  rows,
  cols,
  name,
}) => {
  return (
    <div>
      {!multiline ? (
        <div>
          <input
            disabled={disabled}
            type="text"
            placeholder={value}
            className={`inp ${size} ${fullwidth ? "fullwidth" : ""}`}
          />
          {{ helperText } && <p>{helperText}</p>}
        </div>
      ) : (
        <div>
          <textarea
            name={name}
            cols={cols}
            rows={Number(rows)}
            className="inp"
          ></textarea>
          {{ helperText } && <p>{helperText}</p>}
        </div>
      )}
    </div>
  );
};

InputField.defaultProps = {
  size: "md",
  rows: 1,
  cols: 20,
  name: "textarea",
  helpertext: false,
};

export default InputField;
