/*  import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

function Login() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:3002/users/login", {
        username,
        password,
      });

      const { token, role, userId } = response.data;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("username", username);

      if (role === "admin") {
        alert("Admin logged in successfully");
        navigate("/Admindashboard");
      } else if (role === "user") {
        alert("User logged in successfully");
        navigate("/UserDashboard");
      } else {
        setLoginError("Invalid role");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setLoginError("You are not authorized to access this resource");
      } else {
        setLoginError("Invalid username or password");
      }
    }
  }

  function handleResetPasswordClick() {
    navigate("/ResetPassword");
  }

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <div className="login-form">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-form">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-form">
          <div className="button-container">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="reset-button" onClick={handleResetPasswordClick}>
              Reset Password
            </button>
          </div>
        </div>
        {loginError && <div className="login-error">{loginError}</div>}
      </div>

      <div className="back-button-container">
        <button onClick={buttonClick}>Back</button>
      </div>
    </div>
  );
}

export default Login;


*/

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

function Login() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:3002/users/login", {
        username,
        password,
      });

      const { token, role, userId } = response.data;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("username", username);

      window.dispatchEvent(new Event("storage")); // Trigger storage event to update AppHeader

      if (role === "admin") {
        alert("Admin logged in successfully");
        navigate("/Admindashboard");
      } else if (role === "user") {
        alert("User logged in successfully");
        navigate("/Userdashboard");
      } else {
        setLoginError("Invalid role");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setLoginError("You are not authorized to access this resource");
      } else {
        setLoginError("Invalid username or password");
      }
    }
  }

  function handleResetPasswordClick() {
    navigate("/ResetPassword");
  }

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <div className="login-form">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-form">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-form">
          <div className="button-container">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="reset-button" onClick={handleResetPasswordClick}>
              Reset Password
            </button>
          </div>
        </div>
        {loginError && <div className="login-error">{loginError}</div>}
      </div>

      <div className="back-button-container">
        <button onClick={buttonClick}>Back</button>
      </div>
    </div>
  );
}

export default Login;
