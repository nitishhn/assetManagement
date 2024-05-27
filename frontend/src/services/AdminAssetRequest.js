/*  import axios from "axios";

const AdminAssetRequest = {
  getAllAssetRequests,
  updateAssetRequest,
};

async function getAllAssetRequests() {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make a GET request to the backend endpoint
    const response = await axios.get(
      "http://localhost:3002/assetRequest/getAllAssetRequests",
      config
    );

    alert("getting all asset requests");
    console.log(response.data);
    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error fetching all asset requests:", error);
    throw error;
  }
}

async function updateAssetRequest(assetRequestId, updatedAssetData) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make a PUT request to the backend endpoint
    const response = await axios.put(
      `http://localhost:3002/assetRequest/updateAssetRequestById/${assetRequestId}`,
      updatedAssetData,
      config
    );

    alert("Updating asset request");
    console.log(response.data);
    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error updating asset request:", error);
    throw error;
  }
}

export default AdminAssetRequest;

*/

import axios from "axios";

const AdminAssetRequest = {
  getAllAssetRequests,
  updateAssetRequest,
  deleteAssetRequest,
};

async function getAllAssetRequests() {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make a GET request to the backend endpoint
    const response = await axios.get(
      "http://localhost:3002/assetRequest/getAllAssetRequests",
      config
    );

    alert("Getting all asset requests");
    console.log(response.data);
    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error fetching all asset requests:", error);
    throw error;
  }
}

async function updateAssetRequest(assetRequestId, updatedAssetData) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make a PUT request to the backend endpoint
    const response = await axios.put(
      `http://localhost:3002/assetRequest/updateAssetRequestById/${assetRequestId}`,
      updatedAssetData,
      config
    );

    alert("Updating asset request");
    console.log(response.data);
    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error updating asset request:", error);
    throw error;
  }
}

async function deleteAssetRequest(id) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make a DELETE request to the backend endpoint
    const response = await axios.delete(
      `http://localhost:3002/assetRequest/deleteAssetRequestById/${id}`,
      config
    );

    alert("Deleting asset request");
    console.log(response.data);
    // Return the response data
    return response.data;
  } catch (error) {
    console.error(`Error deleting asset request with ID ${id}:`, error);
    throw error;
  }
}

export default AdminAssetRequest;
