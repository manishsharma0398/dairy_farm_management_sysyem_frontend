import React, { Fragment } from "react";

import "./Radio.styles.scss";

const RadioInput = ({ id, label, name, inputValue, onChangeHandler, type }) => {
  return (
    <Fragment>
      <div className="form-group radio-inputs">
        <input
          className="radio-input"
          type={type}
          id={id}
          name={name}
          value={inputValue}
          onChange={onChangeHandler}
        />
        <label className="radio-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </Fragment>
  );
};

RadioInput.defaultProps = {
  type: "radio",
};

export default RadioInput;
