/*  import React, { useState, useEffect } from "react";
import AssetServiceRequest from "../services/AssetRequestServices";
import "./AdminAssetServiceRequestComponent.css";
import UpdateAssetServiceStatusComponent from "./updateAssetServiceRequestComponent";
import { useNavigate } from "react-router-dom";

function AdminAssetServiceRequestComponent() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchAssetServiceRequests = async () => {
      try {
        const allRequests =
          await AssetServiceRequest.getAllAssetServiceRequests();
        setRequests(allRequests);
      } catch (error) {
        console.error("Error fetching all asset service requests:", error);
      }
    };

    fetchAssetServiceRequests();
  }, []);

  return (
    <div className="asset-service-request-container">
      <h1>All Asset Service Requests</h1>
      <hr />
      <div>
        <button onClick={() => window.location.reload(false)}>Refresh</button>
      </div>
      <br />
      <hr />
      <div>
        <table border="2px" className="asset-service-request-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>User Id</th>
              <th>Asset Id</th>
              <th>Issue Type</th>
              <th>Issue Resolve Status</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.user_id}</td>
                <td>{request.asset_id}</td>
                <td>{request.issue_type}</td>
                <td>{request.issue_resolve_status}</td>
                <td>{request.description}</td>
                <td>
                  <UpdateAssetServiceStatusComponent
                    assetRequestId={request.id}
                    onSuccess={(updatedStatus) => {
                      // Update the request status locally
                      const updatedRequests = requests.map((req) => {
                        if (req.id === request.id) {
                          return {
                            ...req,
                            issue_resolve_status: updatedStatus,
                          };
                        }
                        return req;
                      });
                      setRequests(updatedRequests);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default AdminAssetServiceRequestComponent;

*/

import React, { useState, useEffect } from "react";
import AssetServiceRequest from "../services/AssetRequestServices";
import "./AdminAssetServiceRequestComponent.css";
import UpdateAssetServiceStatusComponent from "./updateAssetServiceRequestComponent";
import { useNavigate } from "react-router-dom";

function AdminAssetServiceRequestComponent() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchAssetServiceRequests = async () => {
      try {
        const allRequests =
          await AssetServiceRequest.getAllAssetServiceRequests();
        setRequests(allRequests);
      } catch (error) {
        console.error("Error fetching all asset service requests:", error);
      }
    };

    fetchAssetServiceRequests();
  }, []);

  const handleDelete = async (id) => {
    try {
      await AssetServiceRequest.deleteAssetServiceRequest(id);
      setRequests(requests.filter((request) => request.id !== id));
    } catch (error) {
      console.error("Error deleting asset service request:", error);
    }
  };

  return (
    <div className="asset-service-request-container">
      <h1>All Asset Service Requests</h1>
      <hr />
      <div>
        <button onClick={() => window.location.reload(false)}>Refresh</button>
      </div>
      <br />
      <hr />
      <div>
        <table border="2px" className="asset-service-request-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>User Id</th>
              <th>Asset Id</th>
              <th>Issue Type</th>
              <th>Issue Resolve Status</th>
              <th>Description</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.user_id}</td>
                <td>{request.asset_id}</td>
                <td>{request.issue_type}</td>
                <td>{request.issue_resolve_status}</td>
                <td>{request.description}</td>
                <td>
                  <UpdateAssetServiceStatusComponent
                    assetRequestId={request.id}
                    onSuccess={(updatedStatus) => {
                      // Update the request status locally
                      const updatedRequests = requests.map((req) => {
                        if (req.id === request.id) {
                          return {
                            ...req,
                            issue_resolve_status: updatedStatus,
                          };
                        }
                        return req;
                      });
                      setRequests(updatedRequests);
                    }}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(request.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default AdminAssetServiceRequestComponent;
