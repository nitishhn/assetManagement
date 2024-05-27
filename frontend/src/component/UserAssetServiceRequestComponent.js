/* import React, { useState } from "react";
import createAssetServiceRequest from "../services/UserAssetServiceRequest"; // Import the createAssetServiceRequest service
import "./UserAssetServiceRequestComponent.css";

function AssetServiceRequestComponent() {
  const [assetServiceRequestData, setAssetServiceRequestData] = useState({
    user_id: "", // Fill this with the user's ID
    asset_id: "", // Fill this with the asset's ID
    description: "",
    issue_type: "",
    issue_resolve_status: "unsolved",
  });

  const handleSubmitRequest = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Filter out unwanted fields
      const {
        user_id,
        asset_id,
        description,
        issue_type,
        issue_resolve_status,
      } = assetServiceRequestData;

      // Create a new object with only the required fields
      const requestData = {
        user_id,
        asset_id,
        description,
        issue_type,
        issue_resolve_status,
      };

      // Call the createAssetServiceRequest function with the filtered data
      const result = await createAssetServiceRequest(requestData);
      alert("asset service request sent succesfully");
      console.log("Asset service request created successfully:", result);
      // Optionally, provide feedback to the user about successful request
    } catch (error) {
      console.error("Error creating asset service request:", error);
      // Optionally, provide feedback to the user about the error
    }
  };

  const handleChange = (e) => {
    // Update the assetServiceRequestData state when input fields change
    setAssetServiceRequestData({
      ...assetServiceRequestData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">
      <h2>Asset Service Request Form</h2>
      <form onSubmit={handleSubmitRequest}>
        <label>
          User ID:
          <input
            type="text"
            name="user_id"
            value={assetServiceRequestData.user_id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Asset ID:
          <input
            type="text"
            name="asset_id"
            value={assetServiceRequestData.asset_id}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Asset Description:
          <textarea
            name="description"
            value={assetServiceRequestData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Issue Type:
          <textarea
            name="issue_type"
            value={assetServiceRequestData.issue_type}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Issue reslove status:
          <textarea
            name="issue_resolve_status"
            value={assetServiceRequestData.issue_resolve_status}
            onChange={handleChange}
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Request Asset Service
        </button>
      </form>
    </div>
  );
}

export default AssetServiceRequestComponent;

*/

import React, { useState } from "react";
import createAssetServiceRequest from "../services/UserAssetServiceRequest"; // Import the createAssetServiceRequest service
import "./UserAssetServiceRequestComponent.css";

function AssetServiceRequestComponent() {
  const [assetServiceRequestData, setAssetServiceRequestData] = useState({
    user_id: "", // Fill this with the user's ID
    asset_id: "", // Fill this with the asset's ID
    description: "",
    issue_type: "",
    issue_resolve_status: "unsolved",
  });

  const [errors, setErrors] = useState({
    user_id: "",
    asset_id: "",
    issue_type: "",
  });

  const handleSubmitRequest = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Validate user_id and asset_id
      if (!Number(assetServiceRequestData.user_id)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          user_id: "User ID must be a number",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, user_id: "" }));
      }

      if (!Number(assetServiceRequestData.asset_id)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          asset_id: "Asset ID must be a number",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, asset_id: "" }));
      }

      // Validate issue_type
      const validIssueTypes = ["repair", "malfunction"];
      if (!validIssueTypes.includes(assetServiceRequestData.issue_type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          issue_type: "Issue type must be either 'repair' or 'malfunction'",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, issue_type: "" }));
      }

      // Filter out unwanted fields
      const {
        user_id,
        asset_id,
        description,
        issue_type,
        issue_resolve_status,
      } = assetServiceRequestData;

      // Create a new object with only the required fields
      const requestData = {
        user_id,
        asset_id,
        description,
        issue_type,
        issue_resolve_status,
      };

      // Call the createAssetServiceRequest function with the filtered data
      const result = await createAssetServiceRequest(requestData);
      alert("Asset service request sent successfully");
      console.log("Asset service request created successfully:", result);
      // Optionally, provide feedback to the user about successful request
    } catch (error) {
      console.error("Error creating asset service request:", error);
      // Optionally, provide feedback to the user about the error
    }
  };

  const handleChange = (e) => {
    // Update the assetServiceRequestData state when input fields change
    setAssetServiceRequestData({
      ...assetServiceRequestData,
      [e.target.name]: e.target.value,
    });

    // Reset validation errors when user modifies input
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  return (
    <div className="card">
      <h2>Asset Service Request Form</h2>
      <form onSubmit={handleSubmitRequest}>
        <label>
          User ID:
          <input
            type="text"
            name="user_id"
            value={assetServiceRequestData.user_id}
            onChange={handleChange}
            required
          />
          {errors.user_id && <p className="error">{errors.user_id}</p>}
        </label>
        <label>
          Asset ID:
          <input
            type="text"
            name="asset_id"
            value={assetServiceRequestData.asset_id}
            onChange={handleChange}
            required
          />
          {errors.asset_id && <p className="error">{errors.asset_id}</p>}
        </label>
        <label>
          Asset Description:
          <textarea
            name="description"
            value={assetServiceRequestData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Issue Type:
          <select
            name="issue_type"
            value={assetServiceRequestData.issue_type}
            onChange={handleChange}
            required
          >
            <option value="">Select Issue Type</option>
            <option value="repair">Repair</option>
            <option value="malfunction">Malfunction</option>
          </select>
          {errors.issue_type && <p className="error">{errors.issue_type}</p>}
        </label>
        <label>
          Issue resolve status:
          <textarea
            name="issue_resolve_status"
            value={assetServiceRequestData.issue_resolve_status}
            onChange={handleChange}
            required
          />
        </label>
        <button className="submit-button" type="submit">
          Request Asset Service
        </button>
      </form>
    </div>
  );
}

export default AssetServiceRequestComponent;
