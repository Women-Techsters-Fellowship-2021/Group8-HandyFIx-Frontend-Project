import "../Styles/login.css";
import image2 from "../Images/image2.jpg";
import React from "react";
import { useHistory } from 'react-router-dom';
import { useState } from "react";



function Login() {
  const history = useHistory();

  const initialState = {
    Email: "",
    Password: ""
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const {name, value} = e.target;
    e.preventDefault();
    setValues({
      ...values, 
      [name]: value,
    });
    //console.log(values)
  };

  function loginHandler() {
    fetch('https://localhost:5001/api/v1/auth/login', {
      method: "POST",
      body: JSON.stringify({
        Email: values.Email,
        Password: values.Password
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        console.log('Error message: ', error)
      });
    history.push('/');
  }
 
  return (

    <div className="form-container">  
        <div className="contentBx">
            <div className="formBx">
                <h2>Welcome</h2>
                <h3>Login to your Account</h3>
                <form action="" onSubmit={loginHandler}>
                    <div className="inputBx">
                        <span>Email</span>
                        <input type="text"
                            name="Email" 
                            placeholder="email"
                            value={values.Email}
                            onChange={handleChange}
                            required />
                    </div>
            
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="text"
                            name="Password" 
                            placeholder="password"
                            value={values.Password}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name="" />Remember me</label>
                        <a href="/#">Forgot Password?</a>
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Login" name="" />
                    </div>
                    <div className="inputBx">
                        <p>Don't have an account? <a href="/#">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
        <div className="imgBx">
            <img src={image2} alt="artisan" />
        </div>
    </div>
  );
};
export default Login;