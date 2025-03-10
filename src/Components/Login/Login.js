import React, { useState } from "react"; // Import React and useState hook to manage component state
import "./Login.css"; // Import the CSS file for styling

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false); // State to manage whether the right panel (Sign Up) is active

  const handleSignUpClick = () => {
    setIsRightPanelActive(true); // Activate the right panel when Sign Up is clicked
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false); // Deactivate the right panel when Sign In is clicked
  };

  return (
    // Main container with a dynamic class based on isRightPanelActive state
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
      
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form action="#"> {/* Form for Sign Up */}
          <h1>Create Account</h1>
          
          {/* Social login option */}
          <div className="social-container">
            <a href="#" className="social" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
          
          <span>or use your email for registration</span>
          
          {/* Input field for Name */}
          <div className="infield">
            <input type="text" placeholder="Name" />
            <label></label>
          </div>
          
          {/* Input field for Email */}
          <div className="infield">
            <input type="email" placeholder="Email" name="email" />
            <label></label>
          </div>
          
          {/* Input field for Age */}
          <div className="infield">
            <input type="number" placeholder="Age" name="age" min="1" max="120" />
            <label></label>
          </div>
          
          {/* Submit button for Sign Up */}
          <button>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form action="#"> {/* Form for Sign In */}
          <h1>Sign in</h1>
          
          {/* Social login option */}
          <div className="social-container">
            <a href="#" className="social" onClick={(e) => e.preventDefault()}>
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
          
          <span>or use your account</span>
          
          {/* Input field for Email */}
          <div className="infield">
            <input type="email" placeholder="Email" name="email" />
            <label></label>
          </div>
          
          {/* Submit button for Sign In */}
          <button>Sign In</button>
        </form>
      </div>

      {/* Overlay Container - Contains the switching panels */}
      <div className="overlay-container" id="overlayCon">
        <div className="overlay">
          
          {/* Left Overlay Panel - For Sign In */}
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            {/* Button to switch to Sign In mode */}
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          
          {/* Right Overlay Panel - For Sign Up */}
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            {/* Button to switch to Sign Up mode */}
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; // Export the Login component for use in other files
