/*  import React, { useState } from "react";
import updateAssetServiceRequest from "../services/AssetRequestServices";

function UpdateAssetServiceRequestComponent({ assetRequestId, onSuccess }) {
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    try {
      const updatedData = { issue_resolve_status: updatedStatus };
      await updateAssetServiceRequest(assetRequestId, updatedData); // Corrected function call
      onSuccess(updatedStatus);
      setUpdatedStatus(""); // Reset the status after successful update
      setError(null); // Reset error state
    } catch (error) {
      setError("Error updating asset request: " + error.message);
    }
  };

  return (
    <div>
      <select
        value={updatedStatus}
        onChange={(e) => setUpdatedStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="solved">Solved</option>
        <option value="unsolved">Unsolved</option>
      </select>
      <button onClick={handleUpdate}>Update</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default UpdateAssetServiceRequestComponent;

*/

import React, { useState } from "react";
import AssetServiceRequest from "../services/AssetRequestServices";

function UpdateAssetServiceStatusComponent({ assetRequestId, onSuccess }) {
  const [status, setStatus] = useState("");

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      const updatedData = { issue_resolve_status: status };
      await AssetServiceRequest.updateAssetServiceRequest(
        assetRequestId,
        updatedData
      );
      onSuccess(status); // Pass the updated status back to the parent component
    } catch (error) {
      console.error("Error updating asset service status:", error);
    }
  };

  return (
    <div>
      <select value={status} onChange={handleStatusChange}>
        <option value="">Select Status</option>
        <option value="solved">Solved</option>
        <option value="unsolved">Unsolved</option>
      </select>
      <button onClick={handleUpdateStatus}>Update Status</button>
    </div>
  );
}

export default UpdateAssetServiceStatusComponent;
