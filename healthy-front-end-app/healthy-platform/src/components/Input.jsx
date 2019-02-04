import React from "react";

const Input = (props) => {
    const { name, lable, ...rest } = props;
  return (
    <div className="form-group">
      <p>{lable}</p>
      <input {...rest} name={name} className="form-control" />
    </div>
  );
};

export default Input;