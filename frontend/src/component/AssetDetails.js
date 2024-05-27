// AssetDetails.js

/*

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssetServices from "../services/AssetServices";
import "./assetDetails.css"; // Import the CSS file

function AssetDetails() {
  const [asset, setAsset] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("ID:", id); // Debugging
    fetchAssetDetails();
  }, [id]);

  const fetchAssetDetails = async () => {
    try {
      const assetData = await AssetServices.getAssetById(id);
      console.log("Asset Data:", assetData); // Debugging
      setAsset(assetData);
    } catch (error) {
      console.error("Error fetching asset details:", error);
    }
  };

  console.log("Asset:", asset); // Debugging

  return (
    <div className="asset-details-container">
      <h1 className="asset-details-header">Asset Details</h1>
      {asset ? (
        <div className="asset-details-content">
          <h2>{asset.name}</h2>
          <img
            src={asset.image}
            alt={asset.name}
            className="asset-details-image"
          />
          <p className="asset-details-description">
            Description: {asset.description}
          </p>
          <p className="asset-details-price">Price: {asset.price}</p>
    
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AssetDetails;

*

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssetServices from "../services/AssetServices";
import "./assetDetails.css"; // Import the CSS file
import UserAssetRequest from "../services/userAssetRequests";

function AssetDetails() {
  const [asset, setAsset] = useState("");
  const { id } = useParams();
  const { user_id } = useParams();
  const { asset_name } = useParams();
  const { asset_description } = useParams();
  const { asset_request_type } = useParams();
  const { asset_request_status } = useParams();

  useEffect(() => {
    console.log("ID:", id); // Debugging
    fetchAssetDetails();
  }, [id]);

  const fetchAssetDetails = async () => {
    try {
      const assetData = await AssetServices.getAssetById(id);
      console.log("Asset Data:", assetData); // Debugging
      setAsset(assetData);
    } catch (error) {
      console.error("Error fetching asset details:", error);
    }
  };

  const handleAssetRequest = async () => {
    try {
      // Make a request to add the asset request to the database
      await UserAssetRequest.createAssetRequest({
        asset_id: id,
        user_id: user_id,
        asset_name: asset_name,
        asset_description: asset_description,
        asset_request_type: asset_request_type,
        asset_request_status: asset_request_status,
      });
      alert("making a asset request");
      console.log("Asset request created successfully");
      // Optionally, you can provide feedback to the user that the request was successful
    } catch (error) {
      console.error("Error requesting asset:", error);
      // Handle error, provide feedback to the user, etc.
    }
  };

  console.log("Asset:", asset); // Debugging

  return (
    <div className="asset-details-container">
      <h1 className="asset-details-header">Asset Details</h1>
      {asset ? (
        <div className="asset-details-content">
          <h2>{asset.name}</h2>
          <img
            src={asset.image}
            alt={asset.name}
            className="asset-details-image"
          />
          <p className="asset-details-description">
            Description: {asset.description}
          </p>
          <p className="asset-details-price">Price: {asset.price}</p>

          <button onClick={handleAssetRequest}>Get Asset</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AssetDetails;

*/

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AssetServices from "../services/AssetServices";
import "./assetDetails.css"; // Import the CSS file

function AssetDetails() {
  const [asset, setAsset] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAssetDetails();
  }, [id]);

  const fetchAssetDetails = async () => {
    try {
      const assetData = await AssetServices.getAssetById(id);
      setAsset(assetData);
    } catch (error) {
      console.error("Error fetching asset details:", error);
    }
  };

  return (
    <div className="asset-details-container">
      <h1 className="asset-details-header">Asset Details</h1>
      {asset ? (
        <div className="asset-details-content">
          <h2>{asset.name}</h2>
          <img
            src={asset.image}
            alt={asset.name}
            className="asset-details-image"
          />
          <p className="asset-details-description">
            Description: {asset.description}
          </p>
          <p className="asset-details-price">Price: {asset.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AssetDetails;
