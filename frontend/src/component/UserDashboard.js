import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userServices from "../services/userServices";
import UserAssetRequest from "../services/userAssetRequests"; // Import the UserAssetRequest service
import "./Userdashboard.css";

import Logout from "./Logout";

function UserDashboard() {
  const [assets, setAssets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchAssets();
    fetchCategories();
  }, []);

  const fetchAssets = async () => {
    try {
      const assetsData = await userServices.getAllAssets();
      setAssets(assetsData);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const categoriesData = await userServices.getAssetCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const userId = sessionStorage.getItem("userId");
  const username = sessionStorage.getItem("username");

  const handleBuyAsset = async (assetId, assetName, assetDescription) => {
    try {
      await UserAssetRequest.createAssetRequest({
        user_id: userId,
        asset_id: assetId, // Use assetId instead of id
        asset_name: assetName,
        username: username,
        asset_description: assetDescription,
        asset_request_type: "borrow", // Provide a default request type if needed
        asset_request_status: "pending", // Provide a default request status if needed
      });

      alert("Asset request created successfully!");
    } catch (error) {
      console.error("Error creating asset request:", error);
      alert("Error creating asset request. Please try again.");
    }
  };

  const filteredAssets = selectedCategory
    ? assets.filter((asset) => asset.category_id === parseInt(selectedCategory))
    : assets;

  return (
    <div className="user-dashboard-container">
      <h1 className="user-dashboard-header">User Dashboard</h1>
      <div className="categories-section">
        <h2>Categories</h2>
        <select
          className="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.category_id} value={category.category_id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="assets-section">
        <h2>Assets</h2>
        {filteredAssets.map((asset) => (
          <div key={asset.id} className="asset-card">
            <h3>{asset.name}</h3>
            <p>Description: {asset.description}</p>
            <p>Price: {asset.price}</p>
            <img
              src={asset.image}
              alt={asset.name}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <div className="asset-actions">
              <button
                onClick={() =>
                  handleBuyAsset(asset.asset_id, asset.name, asset.description)
                }
              >
                Request Asset
              </button>
              <Link
                className="details-button"
                to={`/AssetDetails/${asset.asset_id}`}
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link className="link-button" to="/AssetRequestComponent">
        Add an Asset Service Request
      </Link>

      <div className="link-button">
        <Logout />
      </div>
    </div>
  );
}

export default UserDashboard;
