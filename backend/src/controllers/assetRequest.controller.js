const express = require("express");
const router = express.Router();
const AssetRequestService = require("../services/assetRequest.services");
const authenticateToken = require("../middleware/authenticateToken.middleware");
const logger = require("../utils/loggers");
const authorizeUser = require("../middleware/userauthorization.middleware");
const authorizeAdmin = require("../middleware/adminauthorization.middleware");

// POST /asset-requests
router.post(
  "/createAssetRequest",
  authenticateToken,
  authorizeUser,
  async (req, res) => {
    try {
      let assetRequestObj = {
        user_id: req.body.user_id,
        asset_id: req.body.asset_id,
        assetname: req.body.assetname,
        username: req.body.username,
        asset_description: req.body.asset_description,
        asset_request_type: req.body.asset_request_type,
        asset_request_status: req.body.asset_request_status,
      };

      const result = await AssetRequestService.createAssetRequest(
        assetRequestObj
      );
      res.status(201).json({ message: result });
      logger.info("Asset Request created successfully");
    } catch (error) {
      console.error("Error creating asset request:", error);
      logger.error("Asset Request created successfully");
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// PUT /asset-requests/:id
//http://localhost:3002/assetRequest/updateAssetRequestById/1
router.put(
  "/updateAssetRequestById/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const assetRequestId = req.params.id;
      const assetRequestData = {
        user_id: req.body.user_id,
        asset_id: req.body.asset_id,
        asset_description: req.body.asset_description,
        asset_request_type: req.body.asset_request_type,
        asset_request_status: req.body.asset_request_status,
      };

      await AssetRequestService.updateAssetRequest(
        assetRequestId,
        assetRequestData
      );
      res.status(200).json({ message: "Asset request updated successfully" });
      logger.info("Asset Request updated successfully");
    } catch (error) {
      console.error("Error updating asset request:", error);
      logger.error("error while Asset Request updation ");
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// GET /asset-requests/:id
router.get("/getAssetRequestById/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;
  try {
    const assetRequests = await AssetRequestService.getAssetRequestsById(id);
    res.status(200).json(assetRequests);
    logger.info(" got Asset Request successfully by id");
  } catch (error) {
    console.error("Error getting asset requests by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /asset-requests
router.get(
  "/getAllAssetRequests",
  authenticateToken,
  authorizeAdmin,

  async (req, res) => {
    try {
      const allAssetRequests = await AssetRequestService.getAllAssetRequests();
      res.status(200).json(allAssetRequests);
      logger.info(" got All Asset Request successfully ");
    } catch (error) {
      console.error("Error getting all asset requests:", error);

      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// GET /asset-requests/status/:status
router.get("/getAssetRequestStatus/:status", async (req, res) => {
  const status = req.params.status;
  try {
    const assetRequests = await AssetRequestService.getAssetRequestsByStatus(
      status
    );
    res.status(200).json(assetRequests);
    logger.info(" got All Asset Request successfully by status ");
  } catch (error) {
    console.error("Error getting asset requests by status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE /asset-requests/:id
router.delete(
  "/deleteAssetRequestById/:id",
  authenticateToken,
  async (req, res) => {
    const assetRequestId = req.params.id;
    try {
      await AssetRequestService.deleteAssetRequest(assetRequestId);
      res.status(200).json({ message: "Asset request deleted successfully" });
      logger.info("Asset Request updated successfully");
    } catch (error) {
      console.error("Error deleting asset request:", error);
      res.status(500).json({ message: "Internal server error" });
      logger.error("Error updating asset request:", error);
    }
  }
);

module.exports = router;
