/*  import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Make sure this points to the correct CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [emailExistsError, setEmailExistsError] = useState(false); // New state to track email existence
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const newUser = {
        username: username,
        password: password,
        email: email,
        name: name,
        phone_number: phone_number,
        address: address,
        role: role,
        gender: gender,
      };

      if (!validateForm(newUser)) {
        return;
      }

      await axios.post("http://localhost:3002/users/register", newUser);
      alert("User registered successfully");
      navigate("/Login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Email already exists error
        setEmailExistsError(true);
        setRegisterError("Email is already registered");
      } else {
        // Other registration errors
        setRegisterError("An error occurred during registration");
        console.error("There was an error registering the user:", error);
      }
    }
  }

  async function checkUniqueEmail(email) {
    try {
      const response = await axios.get(
        `http://localhost:3002/users/checkEmail/${email}`
      );
      return !response.data.exists; // Return true if email is unique, false if it already exists
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      return false; // Assume email is not unique if there's an error
    }
  }

  async function validateForm(newUser) {
    if (
      !newUser.username ||
      !newUser.password ||
      !newUser.email ||
      !newUser.name ||
      !newUser.phone_number ||
      !newUser.address ||
      !newUser.role ||
      !newUser.gender
    ) {
      setRegisterError("All fields are required");
      return false;
    }

    if (newUser.password.length < 8) {
      setRegisterError("Password must be at least 8 characters long");
      return false;
    }

    const nameRegex = /^[a-zA-Z\s]*$/; // Allow letters and whitespace
    if (!newUser.name.match(nameRegex)) {
      setRegisterError("Name must contain only letters");
      return false;
    }

    // Check if email is unique
    const isEmailUnique = await checkUniqueEmail(newUser.email);
    if (!isEmailUnique) {
      setEmailExistsError(true);
      setRegisterError("Email is already registered");
      return false;
    }

    if (newUser.role !== "user" && newUser.role !== "admin") {
      setRegisterError("Role must be either 'user' or 'admin'");
      return false;
    }

    // Reset email exists error if validation succeeds
    setEmailExistsError(false);

    return true;
  }

  return (
    <div className="register-container">
      <fieldset>
        <legend>Register</legend>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={async () => {
            if (email) {
              // Check email uniqueness on blur
              const isUnique = await checkUniqueEmail(email);
              if (!isUnique) {
                setEmailExistsError(true);
                setRegisterError("Email is already registered");
              } else {
                setEmailExistsError(false);
                setRegisterError("");
              }
            }
          }}
        />
        {emailExistsError && (
          <div className="error">Email is already registered</div>
        )}
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <div className="gender-options">
          <div className="gender-label">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="gender-label">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        {registerError && <div className="error">{registerError}</div>}
      </fieldset>
    </div>
  );
}

export default Register;


*
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Make sure this points to the correct CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [emailExistsError, setEmailExistsError] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [roleError, setRoleError] = useState("");
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const newUser = {
        username: username,
        password: password,
        email: email,
        name: name,
        phone_number: phone_number,
        address: address,
        role: role,
        gender: gender,
      };

      if (!validateForm(newUser)) {
        return;
      }

      await axios.post("http://localhost:3002/users/register", newUser);
      alert("User registered successfully");
      navigate("/Login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setEmailExistsError(true);
        setRegisterError("Email is already registered");
      } else {
        setRegisterError("An error occurred during registration");
        console.error("There was an error registering the user:", error);
      }
    }
  }

  async function checkUniqueEmail(email) {
    try {
      const response = await axios.get(
        `http://localhost:3002/users/checkEmail/${email}`
      );
      return !response.data.exists;
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      return false;
    }
  }

  function validatePasswordStrength(password) {
    if (password.length >= 8) {
      setPasswordStrength("Strong");
    } else if (password.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Phone number must be 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  }

  function validateRole(role) {
    if (role !== "user" && role !== "admin") {
      setRoleError("Role must be either 'user' or 'admin'");
      return false;
    }
    setRoleError("");
    return true;
  }

  async function validateForm(newUser) {
    if (
      !newUser.username ||
      !newUser.password ||
      !newUser.email ||
      !newUser.name ||
      !newUser.phone_number ||
      !newUser.address ||
      !newUser.role ||
      !newUser.gender
    ) {
      setRegisterError("All fields are required");
      return false;
    }

    if (passwordStrength === "Weak") {
      setRegisterError("Password is too weak");
      return false;
    }

    if (!validatePhoneNumber(newUser.phone_number)) {
      return false;
    }

    if (!validateRole(newUser.role)) {
      return false;
    }

    const isEmailUnique = await checkUniqueEmail(newUser.email);
    if (!isEmailUnique) {
      setEmailExistsError(true);
      setRegisterError("Email is already registered");
      return false;
    }

    setEmailExistsError(false);
    return true;
  }

  return (
    <div className="register-container">
      <fieldset>
        <legend>Register</legend>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePasswordStrength(e.target.value);
          }}
        />
        <div>Password Strength: {passwordStrength}</div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={async () => {
            if (email) {
              const isUnique = await checkUniqueEmail(email);
              if (!isUnique) {
                setEmailExistsError(true);
                setRegisterError("Email is already registered");
              } else {
                setEmailExistsError(false);
                setRegisterError("");
              }
            }
          }}
        />
        {emailExistsError && (
          <div className="error">Email is already registered</div>
        )}
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            validatePhoneNumber(e.target.value);
          }}
        />
        {phoneError && <div className="error">{phoneError}</div>}
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            validateRole(e.target.value);
          }}
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {roleError && <div className="error">{roleError}</div>}
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        {registerError && <div className="error">{registerError}</div>}
      </fieldset>
    </div>
  );
}

export default Register;

*
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Make sure this points to the correct CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [roleError, setRoleError] = useState("");
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const newUser = {
        username: username,
        password: password,
        email: email,
        name: name,
        phone_number: phone_number,
        address: address,
        role: role,
        gender: gender,
      };

      if (!(await validateForm(newUser))) {
        return;
      }

      await axios.post("http://localhost:3002/users/register", newUser);
      alert("User registered successfully");
      navigate("/Login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setRegisterError("Email is already registered");
      } else {
        setRegisterError("An error occurred during registration");
        console.error("There was an error registering the user:", error);
      }
    }
  }

  async function checkUniqueEmail(email) {
    try {
      const response = await axios.get(
        `http://localhost:3002/users/checkEmail/${email}`
      );
      return !response.data.exists;
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      return false;
    }
  }

  function validatePasswordStrength(password) {
    if (password.length >= 8) {
      setPasswordStrength("Strong");
    } else if (password.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Phone number must be 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  }

  function validateRole(role) {
    if (role !== "user" && role !== "admin") {
      setRoleError("Role must be either 'user' or 'admin'");
      return false;
    }
    setRoleError("");
    return true;
  }

  async function validateForm(newUser) {
    if (
      !newUser.username ||
      !newUser.password ||
      !newUser.email ||
      !newUser.name ||
      !newUser.phone_number ||
      !newUser.address ||
      !newUser.role ||
      !newUser.gender
    ) {
      setRegisterError("All fields are required");
      return false;
    }

    if (passwordStrength === "Weak") {
      setRegisterError("Password is too weak");
      return false;
    }

    if (!validatePhoneNumber(newUser.phone_number)) {
      return false;
    }

    if (!validateRole(newUser.role)) {
      return false;
    }

    const isEmailUnique = await checkUniqueEmail(newUser.email);
    if (!isEmailUnique) {
      setRegisterError("Email is already registered");
      return false;
    }

    return true;
  }

  return (
    <div className="register-container">
      <fieldset>
        <legend>Register</legend>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePasswordStrength(e.target.value);
          }}
        />
        <div>Password Strength: {passwordStrength}</div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            validatePhoneNumber(e.target.value);
          }}
        />
        {phoneError && <div className="error">{phoneError}</div>}
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            validateRole(e.target.value);
          }}
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {roleError && <div className="error">{roleError}</div>}
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        {registerError && <div className="error">{registerError}</div>}
      </fieldset>
    </div>
  );
}

export default Register;

*/

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Make sure this points to the correct CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const newUser = {
        username,
        password,
        email,
        name,
        phone_number,
        address,
        role,
        gender,
      };

      if (!(await validateForm(newUser))) {
        return;
      }

      await axios.post("http://localhost:3002/users/register", newUser);
      alert("User registered successfully");
      navigate("/Login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setRegisterError("Email is already registered");
      } else {
        setRegisterError("An error occurred during registration");
        console.error("There was an error registering the user:", error);
      }
    }
  }

  async function checkUniqueEmail(email) {
    try {
      const response = await axios.get(
        `http://localhost:3002/users/checkEmail/${email}`
      );
      return !response.data.exists;
    } catch (error) {
      console.error("Error checking email uniqueness:", error);
      return false;
    }
  }

  async function checkUniqueUsername(username) {
    try {
      const response = await axios.get(
        `http://localhost:3002/users/checkUsername/${username}`
      );
      return !response.data.exists;
    } catch (error) {
      console.error("Error checking username uniqueness:", error);
      return false;
    }
  }

  function validatePasswordStrength(password) {
    if (password.length >= 8) {
      setPasswordStrength("Strong");
    } else if (password.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  }

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Phone number must be 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  }

  function validateRole(role) {
    if (role !== "user" && role !== "admin") {
      setRoleError("Role must be either 'user' or 'admin'");
      return false;
    }
    setRoleError("");
    return true;
  }

  async function validateForm(newUser) {
    if (
      !newUser.username ||
      !newUser.password ||
      !newUser.email ||
      !newUser.name ||
      !newUser.phone_number ||
      !newUser.address ||
      !newUser.role ||
      !newUser.gender
    ) {
      setRegisterError("All fields are required");
      return false;
    }

    if (passwordStrength === "Weak") {
      setRegisterError("Password is too weak");
      return false;
    }

    if (!validatePhoneNumber(newUser.phone_number)) {
      return false;
    }

    if (!validateRole(newUser.role)) {
      return false;
    }

    const isEmailUnique = await checkUniqueEmail(newUser.email);
    if (!isEmailUnique) {
      setRegisterError("Email is already registered");
      return false;
    }

    const isUsernameUnique = await checkUniqueUsername(newUser.username);
    if (!isUsernameUnique) {
      setRegisterError("Username is already registered");
      return false;
    }

    return true;
  }

  return (
    <div className="register-container">
      <fieldset>
        <legend>Register</legend>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <div className="error">{usernameError}</div>}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePasswordStrength(e.target.value);
          }}
        />
        <div>Password Strength: {passwordStrength}</div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone_number}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            validatePhoneNumber(e.target.value);
          }}
        />
        {phoneError && <div className="error">{phoneError}</div>}
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            validateRole(e.target.value);
          }}
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {roleError && <div className="error">{roleError}</div>}
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        {registerError && <div className="error">{registerError}</div>}
      </fieldset>
    </div>
  );
}

export default Register;
