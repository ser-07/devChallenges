import React from "react";
import "../styles/inputStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddLinkIcon from "@mui/icons-material/AddLink";

const InputField = ({
  color,
  size,
  error,
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
  let icon_start;
  switch (startIcon) {
    case "search":
      icon_start = <SearchIcon />;
      break;
    case "phone":
      icon_start = <PhoneIcon />;
      break;
    case "amount":
      icon_start = <CurrencyRupeeIcon />;
      break;
    case "card":
      icon_start = <CreditCardIcon />;
      break;
    case "link":
      icon_start = <AddLinkIcon />;
      break;
    default:
      icon_start = null;
  }

  let icon_end;
  switch (endIcon) {
    case "search":
      icon_end = <SearchIcon />;
      break;
    case "phone":
      icon_end = <PhoneIcon />;
      break;
    case "amount":
      icon_end = <CurrencyRupeeIcon />;
      break;
    case "card":
      icon_end = <CreditCardIcon />;
      break;
    case "link":
      icon_end = <AddLinkIcon />;
      break;
    default:
      icon_end = null;
  }
  console.log(endIcon, startIcon);
  return (
    <div className="inp-container">
      {!multiline ? (
        <div className="img-wrapper">
          {startIcon && <span className="icon_left">{icon_start}</span>}
          <input
            disabled={disabled}
            type="text"
            placeholder={value}
            className={`inp ${size} ${fullwidth ? "fullwidth" : ""} ${color} ${
              disabled && "disabled"
            } ${error && "error"} ${startIcon && "icon_left_p"} ${
              endIcon && "icon_right_p"
            }`}
          ></input>
          {endIcon && <span className="icon_right">{icon_end}</span>}

          {{ helperText } && (
            <p className={`helper-text ${error && "error-text"}`}>
              {helperText}
            </p>
          )}
        </div>
      ) : (
        <div>
          <textarea name={name} cols={cols} rows={Number(rows)}></textarea>
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
