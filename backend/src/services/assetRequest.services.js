const assetRequestModel = require("../models/asset_request.model");

exports.createAssetRequest = async (assetRequestObj) => {
  await assetRequestModel.create(assetRequestObj);
  return "Asset Request is Accepted";
};

exports.updateAssetRequest = async (assetRequestId, assetRequestData) => {
  await assetRequestModel.update(assetRequestData, {
    where: { id: assetRequestId }, // Pass the assetRequestId here
  });
};

/*
exports.updateAssetRequest = async (assetRequestData) => {
  await assetRequestModel.update(assetRequestData, {
    where: { id },
  });
};

*/

exports.getAssetRequestsById = async (id) => {
  const assetRequests = await assetRequestModel.findAll({ where: { id } });
  return assetRequests;
};

exports.getAssetRequestsByStatus = async (status) => {
  const assetRequests = await assetRequestModel.findAll({
    where: { asset_request_status: status }, // Corrected to use the provided status
  });
  return assetRequests;
};

exports.deleteAssetRequest = async (assetRequestId) => {
  await assetRequestModel.destroy({ where: { id: assetRequestId } });
};

exports.getAllAssetRequests = async () => {
  const assetRequests = await assetRequestModel.findAll();
  return assetRequests;
};
