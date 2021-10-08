
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
                          {/* <span>Email</span>  */} 
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
                        {/* <span>Password</span> */}  
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
                        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
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