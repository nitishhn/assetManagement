const assetServiceRequestModel = require("../models/asset_service_request.model");

exports.createAssetServiceRequest = async (assetServiceRequestObj) => {
  await assetServiceRequestModel.create(assetServiceRequestObj);
  return "Asset Service Request is Accepted";
};

/*
exports.getAllAssetServiceRequests = async () => {
  const resultArray = await assetServiceRequestModel.findAll();
  return resultArray;
};
*/

exports.getAllAssetServiceRequests = async () => {
  try {
    const resultArray = await assetServiceRequestModel.findAll();
    return resultArray;
  } catch (error) {
    throw new Error("Error fetching asset service requests: " + error.message);
  }
};

exports.updateAssetServiceRequest = async (
  assetServiceRequestData,
  assetServiceRequestId
) => {
  try {
    const result = await assetServiceRequestModel.update(
      assetServiceRequestData,
      {
        where: { id: assetServiceRequestId },
      }
    );
    return result;
  } catch (error) {
    throw new Error("Error updating asset service request: " + error.message);
  }
};

exports.getAssetServiceRequestById = async (id) => {
  const assetServiceRequest = await assetServiceRequestModel.findByPk(id);
  return assetServiceRequest;
};

exports.getAssetServiceRequestsByStatus = async (status) => {
  const assetServiceRequests = await assetServiceRequestModel.findAll({
    where: { status },
  });
  return assetServiceRequests;
};

//http://localhost:3002/assetServiceRequest/deleteAssetServiceRequest/1
exports.deleteAssetServiceRequest = async (assetServiceRequestId) => {
  try {
    await assetServiceRequestModel.destroy({
      where: { id: assetServiceRequestId },
    });
    console.log("succes");

    // If deletion is successful, no need to return anything
  } catch (error) {
    // Handle the error appropriately (e.g., log it or throw a custom error)
    console.error("Error deleting asset service request:", error);
    throw new Error("Failed to delete asset service request");
  }
};
