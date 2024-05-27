import axios from "axios";

export let AssetServices = {
  getAllAssets,
  getAssetById,
  createAsset,
  updateAssetById,
  deleteAssetById,
};

async function getAllAssets() {
  try {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };

    // Make the GET request with the configured headers
    let response = await axios.get(
      "http://localhost:3002/assets/getAllAssets",
      config // Pass the config object containing the headers
    );

    // Display an alert
    alert("getting all assets data");

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error getting all assets:", error);
    throw error;
  }
}

//http://localhost:3002/assets/getAssetById/5

async function getAssetById(assetId) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };
    const response = await axios.get(
      "http://localhost:3002/assets/getAssetById/" + assetId,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error getting asset by ID");
    throw error;
  }
}

async function deleteAssetById(assetId) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };
    const response = await axios.delete(
      "http://localhost:3002/assets/deleteAssetById/" + assetId,
      config
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting asset by ID ${assetId}:`, error);
    throw error;
  }
}

async function updateAssetById(assetId, updateAssetForm) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };

    const response = await axios.put(
      "http://localhost:3002/assets/updateAssetById/" + assetId, // Corrected assetId usage
      updateAssetForm,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error while updating asset by ID:", error);
    throw error;
  }
}

async function createAsset(assetData) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };

    const response = await axios.post(
      "http://localhost:3002/assets/createAsset",
      assetData,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error creating asset:", error);
    throw error;
  }
}

export default AssetServices;
