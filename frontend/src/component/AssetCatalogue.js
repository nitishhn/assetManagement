import React, { useState, useEffect } from "react";
import AssetServices from "../services/AssetServices";
import { useNavigate } from "react-router-dom";
import "./AssetCatalogue.css";
import AssetServiceRequestComponent from "./AdminAssetServiceRequestComponent";

function AssetCatalogue() {
  const navigate = useNavigate();
  const [createForm, setCreateForm] = useState({
    category_id: "",
    name: "",
    model: "",
    manufacturing_date: "",
    expiry_date: "",
    price: "",
    image: "",
    description: "",
    quantity: "",
    availabilityStatus: "",
  });

  const [updateAssetForm, setUpdateAssetForm] = useState({
    assetId: "",
    category_id: "",
    name: "",
    model: "",
    manufacturing_date: "",
    expiry_date: "",
    price: "",
    image: "",
    description: "",
    quantity: "",
    availabilityStatus: "",
  });

  const [assets, setAssets] = useState([]);
  const [assetId, setAssetId] = useState("");

  useEffect(() => {
    clearForms();
  }, []);

  const handleChangeCreate = (e) => {
    const { name, value } = e.target;
    setCreateForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateAssetForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeGetAsset = (e) => {
    const { value } = e.target;
    setUpdateAssetForm((prevData) => ({
      ...prevData,
      assetId: value,
    }));
  };

  const handleGetAssetById = async () => {
    try {
      if (assetId) {
        const asset = await AssetServices.getAssetById(assetId);
        alert("Getting asset by ID");
        console.log("Asset by ID:", asset);
        setAssets([asset]); // Update state with the fetched asset
        // Set the retrieved data in the state variables
        setUpdateAssetForm((prevData) => ({
          ...prevData,
          category_id: asset.category_id,
          name: asset.name,
          model: asset.model,
          manufacturing_date: asset.manufacturing_date,
          expiry_date: asset.expiry_date,
          price: asset.price,
          image: asset.image,
          description: asset.description,
          quantity: asset.quantity,
          availabilityStatus: asset.asset_availability_status,
        }));
      }
    } catch (error) {
      console.error("Error getting asset by ID:", error);
    }
  };

  const handleGetAllAssets = async () => {
    try {
      const allAssets = await AssetServices.getAllAssets();
      console.log("All Assets:", allAssets);
      setAssets(allAssets);
    } catch (error) {
      console.error("Error getting all assets:", error);
    }
  };

  const handleCreateAsset = async () => {
    try {
      const newAsset = await AssetServices.createAsset(createForm);
      alert("Creating a new asset");
      console.log("New Asset:", newAsset);
      handleGetAllAssets();
    } catch (error) {
      console.error("Error creating asset:", error);
    }
  };

  const handleUpdateAssetById = async () => {
    try {
      const updatedAsset = await AssetServices.updateAssetById(
        updateAssetForm.assetId,
        updateAssetForm
      );
      alert("Updating asset by ID");
      console.log("Updated Asset:", updatedAsset);
      handleGetAllAssets();
    } catch (error) {
      console.error("Error updating asset by ID:", error);
    }
  };

  const handleDeleteAssetById = async (id) => {
    try {
      const deletedAsset = await AssetServices.deleteAssetById(id);
      alert("Deleting asset by ID");
      console.log("Deleted Asset:", deletedAsset);
      handleGetAllAssets();
    } catch (error) {
      console.error("Error deleting asset by ID:", error);
    }
  };

  const clearForms = () => {
    setCreateForm({
      category_id: "",
      name: "",
      model: "",
      manufacturing_date: "",
      expiry_date: "",
      price: "",
      image: "",
      description: "",
      quantity: "",
      availabilityStatus: "",
    });
    setUpdateAssetForm({
      assetId: "",
      category_id: "",
      name: "",
      model: "",
      manufacturing_date: "",
      expiry_date: "",
      price: "",
      image: "",
      description: "",
      quantity: "",
      availabilityStatus: "",
    });
  };

  return (
    <div className="asset-catalogue-container">
      <h1 align="center">ADMIN DASHBOARD</h1>
      <hr />
      <div className="asset-catalogue-container">
        {/* Other JSX content... */}
      </div>
      <hr />

      {/* Get Asset by ID Section */}
      <div>
        <h2>Get Asset by ID</h2>
        <label>
          Asset ID:
          <input
            type="text"
            value={assetId} // Update to use assetId directly
            onChange={(e) => setAssetId(e.target.value)} // Update to setAssetId directly
          />
        </label>
        <button onClick={handleGetAssetById} className="button">
          Get Asset by ID
        </button>
      </div>

      <br />
      <hr />

      {/* Create Asset Section */}
      <div>
        <h2>Create Asset</h2>
        {Object.entries(createForm).map(([key, value]) => (
          <div key={key} className="data-field">
            <label className="label">{key}:</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChangeCreate}
              className="input"
            />
          </div>
        ))}
        <button onClick={handleCreateAsset} className="button btn-create">
          Create Asset
        </button>
      </div>

      <br />
      <hr />

      <div>
        <h2>Update Asset by ID</h2>
        {Object.entries(updateAssetForm).map(([key, value]) => (
          <div key={key} className="data-field">
            <label className="label">{key}:</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChangeUpdate}
              className="input"
            />
          </div>
        ))}
        <button onClick={handleUpdateAssetById} className="button btn-other">
          Update Asset by ID
        </button>
      </div>

      {/* Delete Asset by ID Section */}
      <div>
        <h2>Delete Asset by ID</h2>
        <label>
          Asset ID:
          <input
            type="text"
            value={updateAssetForm.assetId}
            onChange={(e) =>
              setUpdateAssetForm({
                ...updateAssetForm,
                assetId: e.target.value,
              })
            }
            className="input"
          />
        </label>
        <button
          onClick={() => handleDeleteAssetById(updateAssetForm.assetId)}
          className="button btn-delete"
        >
          Delete Asset by ID
        </button>
      </div>

      <br />
      <hr />

      {/* Get All Assets Section */}
      <div>
        <h2>Get All Assets</h2>
        <button onClick={handleGetAllAssets} className="button btn-other">
          Get All Assets
        </button>
      </div>

      <br />
      <hr />

      {/* Display Assets */}
      <div>
        <h2>Assets List</h2>
        <table border="2px" className="asset-table">
          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Category ID</th>
              <th>Name</th>
              <th>Model</th>
              <th>Manufacturing Date</th>
              <th>Expiry Date</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Availability Status</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.asset_id}>
                <td>{asset.asset_id}</td>
                <td>{asset.category_id}</td>
                <td>{asset.name}</td>
                <td>{asset.model}</td>
                <td>{asset.manufacturing_date}</td>
                <td>{asset.expiry_date}</td>
                <td>{asset.price}</td>
                <td>{asset.quantity}</td>
                <td>{asset.asset_availability_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssetCatalogue;
