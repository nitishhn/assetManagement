/*  import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Homepage";
import AssetCatalogue from "./component/AssetCatalogue";

import UserDashboard from "./component/UserDashboard";
import Admindashboard from "./component/Admindashboard";
import AssetDetails from "./component/AssetDetails";

import AssetRequestComponent from "./component/UserAssetServiceRequestComponent";
import AdminAssetRequestsComponent from "./component/AdminAssetRequestComponent";
import AdminAssetServiceRequestComponent from "./component/AdminAssetServiceRequestComponent";

import "semantic-ui-css/semantic.min.css";
import About from "./component/AboutUs";
import Contact from "./component/ContactUs";
import App from "./App";
import AssetServiceRequestComponent from "./component/UserAssetServiceRequestComponent";
import Footer from "./component/Footer";
import Logout from "./component/Logout";
import ResetPassword from "./component/ResetPassword";

const routing = (
  <Router>
    <div style={{ textAlign: "center" }}></div>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AssetCatalogue" element={<AssetCatalogue />} />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route path="/Userdashboard" element={<UserDashboard />} />
      <Route path="/Admindashboard" element={<Admindashboard />} />
      <Route path="/AssetDetails/:id" element={<AssetDetails />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route
        path="/AssetRequestComponent"
        element={<AssetServiceRequestComponent />}
      />
      <Route
        path="/AdminAssetRequestComponent"
        element={<AdminAssetRequestsComponent />}
      />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route path="/Logout" element={<Logout />} />

      <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Homepage";
import AssetCatalogue from "./component/AssetCatalogue";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/Admindashboard";
import AssetDetails from "./component/AssetDetails";
import AssetRequestComponent from "./component/UserAssetServiceRequestComponent";
import AdminAssetRequestsComponent from "./component/AdminAssetRequestComponent";
import AdminAssetServiceRequestComponent from "./component/AdminAssetServiceRequestComponent";
import "semantic-ui-css/semantic.min.css";
import About from "./component/AboutUs";
import Contact from "./component/ContactUs";
import App from "./App";
import Footer from "./component/Footer";
import Logout from "./component/Logout";
import ResetPassword from "./component/ResetPassword";
import ProtectedRoute from "./component/ProtectedRoute"; // Import the ProtectedRoute component

const routing = (
  <Router>
    <div style={{ textAlign: "center" }}></div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AssetCatalogue" element={<AssetCatalogue />} />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route
        path="/Userdashboard"
        element={<ProtectedRoute element={<UserDashboard />} role="user" />}
      />
      <Route
        path="/Admindashboard"
        element={<ProtectedRoute element={<AdminDashboard />} role="admin" />}
      />
      <Route path="/AssetDetails/:id" element={<AssetDetails />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route
        path="/AssetRequestComponent"
        element={<AssetRequestComponent />}
      />
      <Route
        path="/AdminAssetRequestComponent"
        element={<AdminAssetRequestsComponent />}
      />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

*

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Homepage";
import AssetCatalogue from "./component/AssetCatalogue";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/Admindashboard";
import AssetDetails from "./component/AssetDetails";
import AssetRequestComponent from "./component/UserAssetServiceRequestComponent";
import AdminAssetRequestsComponent from "./component/AdminAssetRequestComponent";
import AdminAssetServiceRequestComponent from "./component/AdminAssetServiceRequestComponent";
import "semantic-ui-css/semantic.min.css";
import About from "./component/AboutUs";
import Contact from "./component/ContactUs";
import App from "./App";
import Footer from "./component/Footer";
import Logout from "./component/Logout";
import ResetPassword from "./component/ResetPassword";
import ProtectedRoute from "./component/ProtectedRoute"; // Import the ProtectedRoute component
import Admindashboard from "./component/Admindashboard";

const routing = (
  <Router>
    <div style={{ textAlign: "center" }}></div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AssetCatalogue" element={<AssetCatalogue />} />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route
        path="/Userdashboard"
        element={<ProtectedRoute element={<UserDashboard />} role="user" />}
      />

      {/*  <Route
        path="/Admindashboard"
        element={<ProtectedRoute element={<Admindashboard />} role="admin" />}
      />



      <Route
        path="/Admindashboard"
        element={
          <ProtectedRoute>
            <Admindashboard />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="/AssetDetails/:id" element={<AssetDetails />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route
        path="/AssetRequestComponent"
        element={<AssetRequestComponent />}
      />
      <Route
        path="/AdminAssetRequestComponent"
        element={<AdminAssetRequestsComponent />}
      />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

*

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Homepage";
import AssetCatalogue from "./component/AssetCatalogue";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/Admindashboard";
import AssetDetails from "./component/AssetDetails";
import AssetRequestComponent from "./component/UserAssetServiceRequestComponent";
import AdminAssetRequestsComponent from "./component/AdminAssetRequestComponent";
import AdminAssetServiceRequestComponent from "./component/AdminAssetServiceRequestComponent";
import "semantic-ui-css/semantic.min.css";
import About from "./component/AboutUs";
import Contact from "./component/ContactUs";
import App from "./App";
import Footer from "./component/Footer";
import Logout from "./component/Logout";
import ResetPassword from "./component/ResetPassword";
import ProtectedRoute from "./component/ProtectedRoute";

const routing = (
  <Router>
    <div style={{ textAlign: "center" }}></div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AssetCatalogue" element={<AssetCatalogue />} />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route
        path="/Userdashboard"
        element={
          <ProtectedRoute element={<UserDashboard />} requiredRole="user" />
        }
      />
      <Route
        path="/Admindashboard"
        element={
          <ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />
        }
      />
      <Route path="/AssetDetails/:id" element={<AssetDetails />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route
        path="/AssetRequestComponent"
        element={<AssetRequestComponent />}
      />
      <Route
        path="/AdminAssetRequestComponent"
        element={<AdminAssetRequestsComponent />}
      />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Homepage";
import AssetCatalogue from "./component/AssetCatalogue";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/Admindashboard";
import AssetDetails from "./component/AssetDetails";
import AssetRequestComponent from "./component/UserAssetServiceRequestComponent";
import AdminAssetRequestsComponent from "./component/AdminAssetRequestComponent";
import AdminAssetServiceRequestComponent from "./component/AdminAssetServiceRequestComponent";
import "semantic-ui-css/semantic.min.css";
import About from "./component/AboutUs";
import Contact from "./component/ContactUs";
import App from "./App";
import Footer from "./component/Footer";
import Logout from "./component/Logout";
import ResetPassword from "./component/ResetPassword";
import ProtectedRoute from "./component/ProtectedRoute";
import UserDetailsComponent from "./component/UserDetailsComponent";

const routing = (
  <Router>
    <div style={{ textAlign: "center" }}></div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AssetCatalogue" element={<AssetCatalogue />} />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />
      <Route
        path="/Userdashboard"
        element={
          <ProtectedRoute element={<UserDashboard />} requiredRole="user" />
        }
      />
      <Route
        path="/Admindashboard"
        element={
          <ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />
        }
      />
      <Route path="/AssetDetails/:id" element={<AssetDetails />} />
      <Route path="/AboutUs" element={<About />} />
      <Route path="/ContactUs" element={<Contact />} />
      <Route
        path="/AssetRequestComponent"
        element={<AssetRequestComponent />}
      />
      <Route
        path="/AdminAssetRequestComponent"
        element={<AdminAssetRequestsComponent />}
      />
      <Route
        path="/AdminAssetServiceRequestComponent"
        element={<AdminAssetServiceRequestComponent />}
      />

      <Route path="/UserDetailsComponent" element={<UserDetailsComponent />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
