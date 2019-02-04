import React, { Component } from "react";
import Input from "./Input";
import Login from "./Login";
import Signup from "./Signup";
import { setToken , setUser } from "../services/authService";
class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: "",
        // name: "",
        firstt_name: "",
        last_name: ""
      }
    };
  }

handleRequest(user) {

  console.log("\n\n\n\n\n\n" , "fetching data " , user)
    let apiUrl = "http://localhost:3000";


    apiUrl += this.props.form === "signup" ? "/users" : "/login";
    console.log(apiUrl);

   let data = this.props.form === "signup" ? { user } : user ; 
   // data in the stete?????? is equal to user 
  




   console.log("\n\n\n data" , data)

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setToken(data.auth_token);
        setUser(JSON.stringify({ 
        email: data.email , 
        firstt_name: data.firstt_name, 
        id: data.id , 
        last_name: data.last_name  }));
        this.props.onLogin();
      })
      .catch(error => {

        console.log("this is an error \n\n\n")
        console.log(error);
      });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.handleRequest(this.state.data);
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderInput = (name, lable, type = "text") => {
    const { data } = this.state;
    // const data = this.state.data

    return (
      <Input
        name={name}
        lable={lable}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };
  render() {
    return (
      <div>
        {this.props.form === "signup" ? (
          <Signup
            renderInput={this.renderInput}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <Login
            renderInput={this.renderInput}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default AuthForm;