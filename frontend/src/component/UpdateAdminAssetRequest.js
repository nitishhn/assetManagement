// UpdateAdminAssetRequest.js
import React, { useState } from "react";
import AdminAssetRequest from "../services/AdminAssetRequest";

function UpdateAdminAssetRequest({ assetRequestId, onSuccess }) {
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    try {
      // Call the service to update the asset request status
      await AdminAssetRequest.updateAssetRequest(assetRequestId, {
        asset_request_status: updatedStatus,
      });

      // If the update is successful, trigger the onSuccess callback
      onSuccess(updatedStatus);

      // Reset state and error
      setUpdatedStatus("");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <select
        value={updatedStatus}
        onChange={(e) => setUpdatedStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="approved">approved</option>
        <option value="rejected">rejected</option>
        <option value="pending">pending</option>
      </select>
      <button onClick={handleUpdate}>Update Status</button>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
}

export default UpdateAdminAssetRequest;
