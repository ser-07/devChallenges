import React from "react";
import InputField from "./InputField";
import "../styles/inputStyles.css";

const InputContent = () => {
  // container > inp-row(Each section) > inp-items(each items) > inp-item(each item) > input
  return (
    <div className="container">
      <div className="inp-row">
        <p className="section-head-text">Size</p>
        <div className="inp-items">
          <div className="inp-item">
            <p>
              {`<InputField 
              value="sm input" size="sm" />`}
            </p>
            <InputField value="sm input" size="sm" />
          </div>
          <div className="inp-item">
            <p>{`<InputField  value="default input" />`}</p>
            <InputField value="default input" />
          </div>
          <div className="inp-item">
            <p>
              {`<InputField
                  helperText="Helper text diabled input"
                  value="lg input"
                  size="lg"
                  disabled
                 />`}
            </p>
            <InputField
              helperText="Helper text diabled input"
              value="lg input"
              size="lg"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="inp-row">
        <p className="section-head-text">Colors</p>
        <div className="inp-items">
          <div className="inp-item">
            <p>{`<InputField value="primary input" color="primary" />`}</p>
            <InputField value="primary input" color="primary" />
          </div>
          <div className="inp-item">
            <p>{`<InputField value="secondary input" color="secondary" />`}</p>
            <InputField value="secondary input" color="secondary" />
          </div>
          <div className="inp-item">
            <p>{`<InputField value="default input" color="default" />`}</p>
            <InputField value="default input" color="default" />
          </div>
          <div className="inp-item">
            <p>{`<InputField value="success input" color="success" />`}</p>
            <InputField value="success input" color="success" />
          </div>
        </div>
      </div>
      <div className="inp-row">
        <p className="section-head-text">Disabled and error varients</p>
        <div className="inp-items">
          <div className="inp-item">
            <p>{`<InputField value="disabled input" disabled />`}</p>
            <InputField value="disabled input" disabled />
          </div>
          <div className="inp-item">
            <p>{`<InputField helperText="error input text" value="error input" error />`}</p>
            <InputField
              helperText="error input text"
              value="error input"
              error
            />
          </div>
        </div>
      </div>

      <div className="inp-row">
        <p className="section-head-text">Full width Input field</p>
        <div className="inp-item">
          <p>{`<InputField fullwidth helperText="Full width input"/> `}</p>
          <InputField helperText="Full width input" fullwidth />
        </div>
      </div>

      <div className="inp-row">
        <p className="section-head-text">Icons</p>
        <div className="inp-items">
          <div className="inp-item">
            <p>
              {` <InputField
                helperText="Phone icon input"
                value="enter phone number"
                startIcon={"phone"}
              />`}
            </p>
            <InputField
              helperText="Phone icon input"
              value="enter phone number"
              startIcon={"phone"}
            />
          </div>
          <div className="inp-item">
            <p>{`<InputField endIcon="search" />`}</p>
            <InputField endIcon="search" />
          </div>
          <div className="inp-item">
            <p>{`<InputField endIcon="amount" />`}</p>
            <InputField endIcon="amount" />
          </div>
          <div className="inp-item">
            <p>{`<InputField startIcon="card" />`}</p>
            <InputField startIcon="card" />
          </div>
          <div className="inp-item">
            <p>{`<InputField endIcon="link" />`}</p>
            <InputField endIcon="link" />
          </div>
        </div>
      </div>
      <div className="inp-row">
        <p className="section-head-text">Multiline</p>
        <div className="inp-items">
          <div className="inp-item">
            <p>{`<InputField multiline rows="5" />`}</p>
            <InputField multiline rows="5" />
          </div>
          <div className="inp-item">
            <p>{`<InputField multiline rows="8" />`}</p>
            <InputField multiline rows="8" />
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default InputContent;
