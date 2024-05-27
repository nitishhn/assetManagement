import axios from "axios";

const UserAssetRequest = {
  createAssetRequest,
};

async function createAssetRequest(assetRequestData) {
  try {
    const token = sessionStorage.getItem("token");

    // Set up the Authorization header
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make a POST request to the backend endpoint
    const response = await axios.post(
      "http://localhost:3002/assetRequest/createAssetRequest",
      assetRequestData,
      config
    );

    // Return the response data
    alert("creating a new asset request");
    console.log("Server response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating asset request:", error);
    throw error;
  }
}

export default UserAssetRequest;
