import axios from "axios";

export let userServices = {
  getAllAssets,
  getAssetCategories,
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

async function getAssetCategories() {
  try {
    // Get the token from sessionStorage
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // Use backticks for template literals
    };

    // Make the GET request with the configured headers
    let response = await axios.get(
      "http://localhost:3002/Category/getAllCategory",
      config // Pass the config object containing the headers
    );

    // Display an alert
    alert("getting all asset categories data");

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error getting all asset categories:", error);
    throw error;
  }
}

export default userServices;
