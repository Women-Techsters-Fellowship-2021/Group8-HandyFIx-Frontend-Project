import "../Styles/login.css";
import image2 from "../Images/image2.jpg";
import React from "react";
import useContextGetter from '../hooks/useContextGetter';
import useLoggedIn from '../hooks/useLoggedIn';
import { useForm } from 'react-hook-form';
//import { useHistory } from 'react-router-dom';



function Login() {
  //redirect the user to the dashboard
  //if they are already signed in
  useLoggedIn();
  const { register, handleSubmit } = useForm();
  const context = useContextGetter();

  const loginHandler = ({ email, password }) => {
    
    let userdata= {
      email: email,
      password: password,
    };

    fetch(`https://localhost:5001/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                  return alert(result.message);
                }
                context.dispatch({
                  type: 'LOGIN',
                  payload: result.body,
                });
               // history.push('/dashboard');

            })
            
            .catch(err => {
              alert('an error occured. please try again later');
            })
  }
 
  return (

    <div className="form-container">  
        <div className="contentBx">
            <div className="formBx">
                <h2>Welcome</h2>
                <h3>Login to your Account</h3>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <div className="inputBx">
                        <span>Email</span>
                        <input type="text"
                            name="" 
                            placeholder="email"
                            required
                            {...register('email')} />
                    </div>
            
                    <div className="inputBx">
                        <span>Password</span>
                        <input type="text"
                            name="" 
                            placeholder="password"
                            required
                            {...register('password')} />
                    </div>
                    <div className="remember">
                        <label><input type="checkbox" name="" />Remember me</label>
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