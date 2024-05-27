import axios from "axios";

const AssetServiceRequest = {
  getAllAssetServiceRequests,
  getAssetServiceRequestById,
  createAssetServiceRequest,
  updateAssetServiceRequest,
  deleteAssetServiceRequest,
};

async function getAllAssetServiceRequests() {
  try {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      "http://localhost:3002/assetServiceRequest/getAllAssetServiceRequest",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error getting all asset service requests:", error);
    throw error;
  }
}
async function getAssetServiceRequestById(id) {
  try {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      `http://localhost:3002/assetServiceRequest/getAssetServiceRequestById/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error getting asset service request by ID ", error);
    throw error;
  }
}

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

async function updateAssetServiceRequest(id, updatedData) {
  try {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(
      `http://localhost:3002/assetServiceRequest/updateAssetServiceRequestById/${id}`,
      updatedData,
      config
    );
    alert("changing state of asset service request");
    return response.data;
  } catch (error) {
    console.error(`Error updating asset service request with ID ${id}:`, error);
    throw error;
  }
}

async function deleteAssetServiceRequest(id) {
  try {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.delete(
      `http://localhost:3002/assetServiceRequest/deleteAssetServiceRequest/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting asset service request with ID ${id}:`, error);
    throw error;
  }
}

export default AssetServiceRequest;
