/* import React, { useState } from 'react'  
import axios from 'axios'; 
import "../Styles/login.css";
import image2 from "../Images/image2.jpg";
import { useHistory } from 'react-router-dom';

function Signup(props) { 
  const history = useHistory(); 
  const [data, setdata] = useState({ Email: '', Password: '', ConfirmPassword: '' })  
  const apiUrl = "http://localhost:5000/api/v1/auth/register";  
  const Registration = (e) => {  
    e.preventDefault();  
    //debugger;  
    const data1 = { 
        Email: data.Email, 
        Password: data.Password, 
        ConfirmPassword: data.ConfirmPassword
         };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        //debugger;  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
            props.history.push('/login')  
      })
      .catch(error=> {
          console.log(error);
      }) 
      history.push('/login')  
  }  
  const onChange = (e) => {  
    e.persist();  
    //debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (
    <div className="form-container">  
        <div className="contentBx">
            <div className="formBx">
                <h2>Welcome</h2>
                <h3>Signup to your Account</h3>
                <form action="" onSubmit={Registration}>
                    <div className="inputBx">
                        <span>Email</span>
                        <input type="text"
                            name="Email" 
                            placeholder="Email"
                            value={data.Email}
                            onChange={onChange}
                            required />
                    </div>
            
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="text"
                            name="Password" 
                            placeholder="Password"
                            value={data.Password}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="inputBx">
                        <span>Confirm Password</span>
                        <input type="text"
                            name="ConfirmPassword" 
                            placeholder="Confirmpassword"
                            value={data.ConfirmPassword}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name="" />Remember me</label>
                        <a href="/#">Forgot Password?</a>
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Signup" name="" />
                    </div>
                    <div className="inputBx">
                        <p>Already have an account? <a href="/login">login</a></p>
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
  
export default Signup */