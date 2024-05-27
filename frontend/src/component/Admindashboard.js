/*import React from "react";
import { Link } from "react-router-dom";
import "./admindashBoard.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function Admindashboard() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }
  return (
    <div className="admin-whole">
      <div className="admindashboard-bg">
        <div className="admindashboard-content">
          <h2>Admin Dashboard</h2>
          <div className="button-container">
            <Link to="/AssetCatalogue">
              <button>Go to Asset Catalogue</button>
            </Link>
            <Link to="/AdminAssetServiceRequestComponent">
              <button>Go to Admin Asset Service Request</button>
            </Link>
            <Link to="/AdminAssetRequestComponent">
              <button>Go to Admin Asset Request</button>
            </Link>
          </div>
        </div>
      </div>
      <button onClick={buttonClick} className="link-button">
        Back
      </button>

      <div className="link-button">
        <Logout />
      </div>
    </div>
  );
}

export default Admindashboard;

*/

import React from "react";
import { Link } from "react-router-dom";
import "./admindashBoard.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

function Admindashboard() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }
  return (
    <div className="admin-whole">
      <div className="admindashboard-bg">
        <div className="admindashboard-content">
          <h2>Admin Dashboard</h2>
          <div className="button-container">
            <Link to="/AssetCatalogue">
              <button>Go to Asset Catalogue</button>
            </Link>
            <Link to="/AdminAssetServiceRequestComponent">
              <button>Go to Admin Asset Service Request</button>
            </Link>
            <Link to="/AdminAssetRequestComponent">
              <button>Go to Admin Asset Request</button>
            </Link>
            <Link to="/UserDetailsComponent">
              <button>Go to User Details</button>
            </Link>
          </div>
        </div>
      </div>
      <button onClick={buttonClick} className="link-button">
        Back
      </button>

      <div className="link-button">
        <Logout />
      </div>
    </div>
  );
}

export default Admindashboard;
