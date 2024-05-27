const assetModel = require("../models/asset.model");

exports.createAsset = async (assetObj) => {
  await assetModel.create(assetObj);
  return "Asset is Created";
};

exports.deleteAsset = async (aid) => {
  await assetModel.destroy({ where: { asset_id: aid } });
};

/*

exports.updateAsset = async (assetObj) => {
  await assetModel.update(assetObj, { where: { asset_id: assetObj.asset_id } });
  return "Asset Updated Successfully";
};

*/

exports.updateAsset = async (assetId, assetData) => {
  await assetModel.update(assetData, { where: { asset_id: assetId } });
};

exports.viewAllocatedAsset = async (aid) => {
  let assetObj = await assetModel.findByPk({ where: { asset_id: aid } });
  return assetObj;
};

exports.getAllAssets = async () => {
  let assetArray = await assetModel.findAll();
  return assetArray;
};

exports.getAssetById = async (assetId) => {
  let assetObj = await assetModel.findByPk(assetId);
  return assetObj;
};

/*
exports.getAssetById = async (asset_id) => {
  let assetObj = await assetModel.findByPk(asset_id);
  return assetObj;
};


*/
