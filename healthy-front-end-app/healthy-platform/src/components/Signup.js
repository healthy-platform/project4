import React from "react";

const Signup = (props) => {
    const { renderInput, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderInput("firstt_name", "First Name")}
        {renderInput("last_name", "Last Name")}
        {renderInput("email", "Email")}
        {renderInput("password", "Password", "password")}
        <button className="btn btn-primary"> Signup </button>
      </form>
    </div>
  );
};

export default Signup;