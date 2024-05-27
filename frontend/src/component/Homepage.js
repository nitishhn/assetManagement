/*

import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"; // Import your CSS file

function Home() {
  return (
    <div>
      <h1 align="center">WELCOME TO ASSET MANAGEMENT WEBSITE</h1>

      <div>
        <Link to="/Register">
          <button>Register</button>
        </Link>

        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>

      <div>
        <Link to="/AboutUs">About Us</Link>
      </div>

      <div>
        <Link to="/ContactUs">Contact Us</Link>
      </div>

      <img
        src="images/banner.jpg"
        width="100%"
        height="600"
        alt="Alternate text"
      />
    </div>
  );
}

export default Home;

*/

// Home.js

import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Home() {
  return (
    <div>
      <h1 align="center">WELCOME TO ASSET MANAGEMENT WEBSITE</h1>

      <div className="button-row">
        <Link to="/Register">
          <button>Register</button>
        </Link>

        <Link to="/Login">
          <button>Login</button>
        </Link>

        <Link to="/AboutUs">
          <button>About Us</button>
        </Link>

        <Link to="/ContactUs">
          <button>Contact Us</button>
        </Link>
      </div>

      <img
        src="images/banner.jpg"
        width="100%"
        height="600"
        alt="Alternate text"
      />
    </div>
  );
}

export default Home;
