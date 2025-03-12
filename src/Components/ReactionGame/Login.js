import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setFormData, handleFormSubmit, setPage }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    console.log("Sign Up Clicked!");
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    console.log("Sign In Clicked!");
    setIsRightPanelActive(false);
  };

  const handleLogin = () => {
    console.log("Google Login Clicked!");
    setPage("game");
    window.open("https://google-authen.onrender.com/auth/google/", "_self");
    //https://google-authen.onrender.com/auth/google/
  };//http://localhost:8080/auth/google

  return (
    <div className="bodyClass">
      <div className={`container-l ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container-l sign-up-container-l">
          <form className="formClass" onSubmit={handleFormSubmit}>
           
            <div onClick={handleLogin} className="social-container-l">
            <h1 className="hClass">Create Account</h1>
              <img className="googleImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="Google Login" />
              <span className="signin-text">Sign in with Google</span>
            </div>
            <span className="span-class">or use your email for registration</span>
            <div className="infield-l">
              <input type="text" name="name" placeholder="Name" onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} required />
            </div>
            <div className="infield-l">
              <input type="email" name="email" placeholder="Email" onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} required />
            </div>
            <div className="infield-l">
              <input type="number" name="age" placeholder="Age" min="1" max="120" onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))} required />
            </div>
             {/* Gender Selection - Dropdown */}
             <div className="infield-l">
              <label className="span-class">Gender:</label>
              <select
                required
                
                onChange={(e) => setFormData((prev) => ({ ...prev, sex: e.target.value }))}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button className="button-class" type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container-l sign-in-container-l">
          <form className="formClass" onSubmit={handleFormSubmit}>
            <h1 className="hClass">Sign in</h1>
            <div className="social-container-l" onClick={handleLogin}>
              <img className="googleImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="Google Login" />
              <span className="signin-text">Sign in with Google</span>
            </div>
            <span className="span-class">or use your account</span>
            <div className="infield-l">
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <button className="button-class">Sign In</button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className="overlay-container" id="overlayCon">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="hClass">Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="button-class ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="hClass">Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="button-class ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;