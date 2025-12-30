import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Utility/Button";

const Login = () => {
  const [view, setView] = useState("login");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const showSignup = () => {
    setMessage("");
    setView("signup");
  };

  const showLogin = () => {
    setMessage("");
    setView("login");
  };

  const showRecoverPassword = () => {
    setMessage("");
    setView("recover");
  };

  const login = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      setMessage("Login successful!");
      setTimeout(() => navigate("/home"), 2000); 
    } else {
      setMessage("Please fill in all fields!");
    }
  };

  const signup = (event) => {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (firstName && lastName && email && password) {
      setMessage("Signup successful!");
      setTimeout(() => navigate("/home"), 2000); 
    } else {
      setMessage("Please fill in all fields!");
    }
  };

  const recoverPassword = (event) => {
    event.preventDefault();
    const email = document.getElementById("recover-email").value;

    if (email) {
      setMessage("Recovery link sent to your email!");
      setTimeout(() => navigate("/home"), 2000); 
    } else {
      setMessage("Please enter your email!");
    }
  };

  return (
    <div className="container">
      {view === "login" && (
        <div id="login-page">
          <h5>Login</h5>
          <p>Enter your email and password to login:</p>
          <form onSubmit={login}>
            <input type="email" id="email" placeholder="E-mail" />
            <div className="password-container">
              <input type="password" id="password" placeholder="Password" />
              <Link to="#" className="forget-password" onClick={showRecoverPassword}>
                Forget your password?
              </Link>
            </div>
            <Button text="Login" />
            {message && <p className="message">{message}</p>}
          </form>
          <p className="small-text">
            Don't have an account? <Link to="#" onClick={showSignup}>Sign up</Link>
          </p>
        </div>
      )}

      {view === "signup" && (
        <div id="signup-page">
          <h5>Signup</h5>
          <p>Please fill in the information below:</p>
          <form onSubmit={signup}>
            <input type="text" id="first-name" placeholder="First name" />
            <input type="text" id="last-name" placeholder="Last name" />
            <input type="email" id="signup-email" placeholder="E-mail" />
            <input type="password" id="signup-password" placeholder="Password" />
            <Button text="Create Account" />
            {message && <p className="message">{message}</p>}
          </form>
          <p className="small-text">
            Already have an account? <Link to="#" onClick={showLogin}>Login</Link>
          </p>
        </div>
      )}

      {view === "recover" && (
        <div id="recover-page">
          <h5>Recover Password</h5>
          <p>Enter your email to recover your password:</p>
          <form onSubmit={recoverPassword}>
            <input type="email" id="recover-email" placeholder="E-mail" />
            <Button text="Recover" />
            {message && <p className="message">{message}</p>}
          </form>
          <p className="small-text">
            Remember your password? <Link to="#" onClick={showLogin}>Back to Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
