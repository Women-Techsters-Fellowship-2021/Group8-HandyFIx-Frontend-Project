/* import "../Styles/login.css";
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
    history.push('/dashboard');
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
export default Login; */

import "../Styles/login.css";
import image2 from "../Images/image2.jpg";
//import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';   
import axios from 'axios';  
function Login(props) {  
    const [user, setuser] = useState({ Email: '', Password: ''});  
    const apiUrl = "http://localhost:5000/api/v1/auth/login";    
    const loginHandler = (e) => {    
            e.preventDefault();    
            //debugger;   
            const data = { 
              Email: user.Email, 
              Password: user.Password 
              };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                //debugger;  
                console.log(result.data); 
                if (result.data.Status === 'Invalid')  
                  alert('Invalid User');  
                else  
                  props.history.push('/landing')  
          
                //if (result.data.status === '200')    
                    //props.history.push('/signup')       
            })
            .catch(error=> {
              console.log(error);
      })         
          };    
          
          const onChange = (e) => {    
                e.persist();    
                //debugger;    
                setuser({...user, [e.target.name]: e.target.value});    
              }    
    return (  
        
        <div className="form-container">  
        <div className="contentBx">
            <div className="formBx">
                <h2>Welcome</h2>
                <h3>Login to your Account</h3> 
                      <form onSubmit={loginHandler} className="users">  
                        <div className="inputBx">
                          <span>Email</span>  
                          <input 
                          type="email" 
                          value={user.Email} 
                          onChange={ onChange }  
                          name="Email" 
                          id="Email" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Email"/>  
                        </div>  
                        <div className="inputBx">
                        <span>Password</span>  
                        <input 
                          type="password"  
                          value={user.Password} 
                          onChange={ onChange }  
                          name="Password" 
                          id="Password" 
                          placeholder="Password"/>  
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
    )  
}  
  
export default Login