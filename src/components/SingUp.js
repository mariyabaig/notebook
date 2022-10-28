import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SingUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: " ",
  });
  let history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
     
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      history.push("/");
      props.showAlert("Sign up successfull",
      "success")
    } else{
      props.showAlert("Invalid Details","danger")
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onClick =()=>{
console.log("Registered")
  }
  return (
    <>
       <div className="container mx-3">
       <h2> Create a new account! </h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1" required minLength={5}>Name</label>
          <input
            type="name"
          
            onChange={onChange}
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
          <label htmlFor="exampleInputEmail1" required minLength={5}>Email address</label>
          <input
            type="email"
            
            onChange={onChange}
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" required minLength={5}>Password</label>
          <input
            type="password"
            
            onChange={onChange}
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1 " required minLength={5}>Confirm Password</label>
          <input
            type="password"
           
            onChange={onChange}
            className="form-control"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="btn btn-primary  " onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default SingUp;
