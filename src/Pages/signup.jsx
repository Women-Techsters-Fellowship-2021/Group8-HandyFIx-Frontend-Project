import React from "react";
import { Link } from "react-router-dom";
import "../Styles/signup.css";
import sign from "../Images/sign.png";
import { useState } from "react";
import { toast  } from "react-toastify";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
  });

  const [validationErrorMsg, setValidationErrorMsg] = useState({
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = validatePassword()
    // if(isValid){
    if (userData.password === userData.confirmPassword) {
      setSignUpDetails({
        email: userData.email,
        password: userData.password,
      });
      toast.error("SignUp succesful");
      console.log("=====>", signUpDetails);
      e.target.reset();
    } else {
      setValidationErrorMsg({
        confirmPassword: "password does not match!",
      });
    }
  };
  console.log("=====>", signUpDetails);

  return (
    <div className="entire">
      <div className="bodily">
        <div className="firstbody">
          <img src={sign} width={600} height={800} alt="" />
        </div>

        <div className="secondbody">
          <h1>SignUp</h1>
          <div className="bodyP">
            <p>Welcome to our community</p>
          </div>
          <h3>Account type</h3>
          <div className="userbutton">
            <div className="userbutton1">
              <button></button>
            </div>
            <div className="userbutton2">
              <button></button>
            </div>
          </div>

          <div className="formalert">
            <form onSubmit={handleSubmit}>
              <input
                className="firstinput"
                placeholder="@email"
                type="text"
                id="email"
                required
                onChange={handleChange}
              />
              <input
                className="firstinput"
                placeholder="password"
                id="password"
                name="password"
                required
                onChange={handleChange}
              />
              <input
                className="firstinput"
                placeholder="confirm password"
                id="confirmPassword"
                required
                onChange={handleChange}
              />
               <small className="Error">{validationErrorMsg.confirmPassword}</small>
              <button>Create Account</button>
            </form>

          </div>

          <div className="privacy">
            {" "}
            <p>
              By creating an account you agree to the
              <span>Terms of conditions</span> and privacy policy{" "}
            </p>
          </div>
          <div className="safety">
            Already have an account?{" "}
            <span>
              <Link>Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
