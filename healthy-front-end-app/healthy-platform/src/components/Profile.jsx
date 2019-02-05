import React from "react";

const Profile = (props) => {
    const { user } = props
  return (
    <div>
      
      <h1>your name is {user ? user.firstt_name  + " " + user.last_name : ""}</h1>
      <hr />
      <h1>your email is {user ? user.email : ""}</h1>
    </div>
  );
};

export default Profile;