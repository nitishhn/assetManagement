/* import React, { useState, useEffect } from "react";
import AdminAssetRequest from "../services/AdminAssetRequest";
import UpdateAdminAssetRequest from "../component/UpdateAdminAssetRequest";
import { useNavigate } from "react-router-dom";

function AdminAssetRequestsComponent() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }
  const [assetRequests, setAssetRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssetRequests = async () => {
      try {
        const response = await AdminAssetRequest.getAllAssetRequests();
        setAssetRequests(response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAssetRequests();
  }, []);

  const handleSuccess = async () => {
    // After updating the asset request, fetch the updated list of asset requests
    try {
      const updatedRequests = await AdminAssetRequest.getAllAssetRequests();
      setAssetRequests(updatedRequests);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        All Asset Requests
      </h2>
      {error && (
        <div style={{ color: "#d9534f", fontSize: "1em" }}>Error: {error}</div>
      )}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {" "}
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Asset Id
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              User Name
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Description
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Request Type
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Request Status
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {assetRequests.map((request) => (
            <tr key={request.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "2px" }}>{request.asset_id}</td>
              <td style={{ padding: "2px" }}>{request.username}</td>
              <td style={{ padding: "5px" }}>{request.asset_description}</td>
              <td style={{ padding: "5px" }}>{request.asset_request_type}</td>
              <td style={{ padding: "5px" }}>{request.asset_request_status}</td>
              <td style={{ padding: "10px" }}>
                <UpdateAdminAssetRequest
                  assetRequestId={request.id}
                  onSuccess={handleSuccess}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default AdminAssetRequestsComponent;

*

import React, { useState, useEffect } from "react";
import AdminAssetRequest from "../services/AdminAssetRequest";
import UpdateAdminAssetRequest from "../component/UpdateAdminAssetRequest";
import { useNavigate } from "react-router-dom";
//import "./AdminAssetRequestComponent.css";

function AdminAssetRequestsComponent() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }

  const [assetRequests, setAssetRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssetRequests = async () => {
      try {
        const response = await AdminAssetRequest.getAllAssetRequests();
        setAssetRequests(response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAssetRequests();
  }, []);

  const handleDelete = async (id) => {
    try {
      await AdminAssetRequest.deleteAssetRequest(id);
      setAssetRequests(assetRequests.filter((request) => request.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSuccess = async () => {
    // After updating the asset request, fetch the updated list of asset requests
    try {
      const updatedRequests = await AdminAssetRequest.getAllAssetRequests();
      setAssetRequests(updatedRequests);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        All Asset Requests
      </h2>
      {error && (
        <div style={{ color: "#d9534f", fontSize: "1em" }}>Error: {error}</div>
      )}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Asset Id
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              User Name
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Description
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Request Type
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Request Status
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Action
            </th>
            <th
              style={{
                backgroundColor: "#f5f5f5",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {assetRequests.map((request) => (
            <tr key={request.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "2px" }}>{request.asset_id}</td>
              <td style={{ padding: "2px" }}>{request.username}</td>
              <td style={{ padding: "5px" }}>{request.asset_description}</td>
              <td style={{ padding: "5px" }}>{request.asset_request_type}</td>
              <td style={{ padding: "5px" }}>{request.asset_request_status}</td>
              <td style={{ padding: "10px" }}>
                <UpdateAdminAssetRequest
                  assetRequestId={request.id}
                  onSuccess={handleSuccess}
                />
              </td>
              <td style={{ padding: "10px" }}>
                <button onClick={() => handleDelete(request.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default AdminAssetRequestsComponent;

*/

import React, { useState, useEffect } from "react";
import AdminAssetRequest from "../services/AdminAssetRequest";
import UpdateAdminAssetRequest from "../component/UpdateAdminAssetRequest";
import { useNavigate } from "react-router-dom";
import "./AdminAssetRequestComponent.css"; // Import the CSS file

function AdminAssetRequestsComponent() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }

  const [assetRequests, setAssetRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssetRequests = async () => {
      try {
        const response = await AdminAssetRequest.getAllAssetRequests();
        setAssetRequests(response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAssetRequests();
  }, []);

  const handleDelete = async (id) => {
    try {
      await AdminAssetRequest.deleteAssetRequest(id);
      setAssetRequests(assetRequests.filter((request) => request.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSuccess = async () => {
    // After updating the asset request, fetch the updated list of asset requests
    try {
      const updatedRequests = await AdminAssetRequest.getAllAssetRequests();
      setAssetRequests(updatedRequests);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="asset-requests-container">
      <h2>All Asset Requests</h2>
      {error && <div className="error-message">Error: {error}</div>}
      <table className="asset-requests-table">
        <thead>
          <tr>
            <th>Asset Id</th>
            <th>User Name</th>
            <th>Description</th>
            <th>Request Type</th>
            <th>Request Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {assetRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.asset_id}</td>
              <td>{request.username}</td>
              <td>{request.asset_description}</td>
              <td>{request.asset_request_type}</td>
              <td>{request.asset_request_status}</td>
              <td>
                <UpdateAdminAssetRequest
                  assetRequestId={request.id}
                  onSuccess={handleSuccess}
                />
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(request.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back" onClick={buttonClick}>
        Back
      </button>
    </div>
  );
}

export default AdminAssetRequestsComponent;
