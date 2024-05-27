import axios from "axios";

async function createAssetServiceRequest(requestData) {
  try {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      "http://localhost:3002/assetServiceRequest/createServiceRequest",
      requestData,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error creating asset service request:", error);
    throw error;
  }
}

export default createAssetServiceRequest;
