/*  import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../wealth.png"; // Import your logo image

export default function AppHeader() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="App">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "8px", width: "30px" }} // Adjust the width as needed
          />
          Asset Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="Register"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link href="Login" style={{ color: "dark", fontSize: "18px" }}>
              Login
            </Nav.Link>
            <Nav.Link
              href="ContactUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              ContactUs
            </Nav.Link>
            <Nav.Link
              href="AboutUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

*

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../wealth.png"; // Import your logo image

export default function AppHeader() {
  const role = sessionStorage.getItem("role");

  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "8px", width: "30px" }} // Adjust the width as needed
          />
          Asset Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="Register"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link href="Login" style={{ color: "dark", fontSize: "18px" }}>
              Login
            </Nav.Link>
            <Nav.Link
              href="ContactUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="AboutUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
            {role === "user" && (
              <Nav.Link
                href="Userdashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                User Dashboard
              </Nav.Link>
            )}
            {role === "admin" && (
              <Nav.Link
                href="Admindashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                Admin Dashboard
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

*

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../wealth.png"; // Import your logo image

export default function AppHeader() {
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(sessionStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "8px", width: "30px" }} // Adjust the width as needed
          />
          Asset Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/Register"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link href="/Login" style={{ color: "dark", fontSize: "18px" }}>
              Login
            </Nav.Link>
            <Nav.Link
              href="/ContactUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="/AboutUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
            {role === "user" && (
              <Nav.Link
                href="/Userdashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                User Dashboard
              </Nav.Link>
            )}
            {role === "admin" && (
              <Nav.Link
                href="/Admindashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                Admin Dashboard
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

*

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../wealth.png"; // Import your logo image

export default function AppHeader() {
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(sessionStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "8px", width: "30px" }} // Adjust the width as needed
          />
          Asset Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/Register"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link href="/Login" style={{ color: "dark", fontSize: "18px" }}>
              Login
            </Nav.Link>
            <Nav.Link
              href="/ContactUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="/AboutUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
            {role === "user" && (
              <Nav.Link
                href="/Userdashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                User Dashboard
              </Nav.Link>
            )}
            {role === "admin" && (
              <Nav.Link
                href="/Admindashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                Admin Dashboard
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

*

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../wealth.png"; // Import your logo image

export default function AppHeader() {
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(sessionStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "8px", width: "30px" }} // Adjust the width as needed
          />
          Asset Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/Register"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link href="/Login" style={{ color: "dark", fontSize: "18px" }}>
              Login
            </Nav.Link>
            <Nav.Link
              href="/ContactUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="/AboutUs"
              style={{ color: "dark", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
            {role === "user" && (
              <Nav.Link
                href="/Userdashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                User Dashboard
              </Nav.Link>
            )}
            {role === "admin" && (
              <Nav.Link
                href="/Admindashboard"
                style={{ color: "dark", fontSize: "18px" }}
              >
                Admin Dashboard
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

*/

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../wealth.png"; // Import your logo image

export default function AppHeader() {
  const [role, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(sessionStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Navbar expand="lg" style={{ backgroundColor: "pink" }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "8px", width: "30px" }} // Adjust the width as needed
          />
          Asset Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/Register"
              style={{ color: "dark", fontSize: "18px" }}
            >
              Register
            </Nav.Link>
            <Nav.Link href="/Login" style={{ color: "dark", fontSize: "18px" }}>
              Login
            </Nav.Link>

            <Nav.Link
              href="/Userdashboard"
              style={{ color: "dark", fontSize: "18px" }}
            >
              UserDashboard
            </Nav.Link>
            <Nav.Link
              href="/Admindashboard"
              style={{ color: "dark", fontSize: "18px" }}
            >
              AdminDashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
