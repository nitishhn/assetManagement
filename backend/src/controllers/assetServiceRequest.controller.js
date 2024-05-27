const express = require("express");
const router = express.Router();

const AssetServiceRequest = require("../services/assetServiceRequest.services");

const authenticateToken = require("../middleware/authenticateToken.middleware");

const logger = require("../utils/loggers");
const authorizeAdmin = require("../middleware/adminauthorization.middleware");

//http://localhost:3002/assetServiceRequest/getAllAssetServiceRequest
router.get(
  "/getAllAssetServiceRequest",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const result = await AssetServiceRequest.getAllAssetServiceRequests();
      console.log(result);
      res.status(200).json(result);
      logger.info(" got All Asset service Request successfully ");
    } catch (error) {
      console.error("Error while getting result:", error);
      res.status(500).json({ message: "Internal server error" });
      logger.error("Error getting all asset srvice requests:", error);
    }
  }
);

// Route to get asset service request by ID
//http://localhost:3002/assetServiceRequest/getAssetServiceRequestById/9
router.get(
  "/getAssetServiceRequestById/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const assetServiceRequestId = req.params.id;
      const assetServiceRequest =
        await AssetServiceRequest.getAssetServiceRequestById(
          assetServiceRequestId
        );
      if (!assetServiceRequest) {
        return res
          .status(404)
          .json({ message: "Asset service request not found" });
      }
      res.status(200).json(assetServiceRequest);
      logger.info(" got Asset service Request successfully by id");
    } catch (error) {
      console.error("Error while getting asset service request:", error);
      logger.error("Error getting all asset service requests:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

//localhost:3002/assetServiceRequest/createServiceRequest
router.post("/createServiceRequest", authenticateToken, async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("Request body is undefined");
    }

    const assetServiceRequestObj = {
      id: req.body.id,
      user_id: req.body.user_id,
      asset_id: req.body.asset_id,
      issue_type: req.body.issue_type,
      issue_resolve_status: req.body.issue_resolve_status,
      description: req.body.description,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
    };

    console.log(assetServiceRequestObj);

    const result = await AssetServiceRequest.createAssetServiceRequest(
      assetServiceRequestObj
    );
    res.status(201).json({ message: result });
    logger.info("Asset service Request created successfully");
  } catch (error) {
    console.error("Error creating asset service request:", error);
    res.status(500).json({ message: "Internal server error" });
    logger.error(" Error while  creating Asset service Request ");
  }
});

//pending
// Route to update an asset service request
//localhost:3002/assetServiceRequest/updateAssetServiceRequest/2

router.put(
  "/updateAssetServiceRequestById/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const assetServiceRequestId = req.params.id;

      const updatedAssetServiceRequestData = {
        user_id: req.body.user_id,
        asset_id: req.body.asset_id,
        issue_type: req.body.issue_type,
        issue_resolve_status: req.body.issue_resolve_status,
        description: req.body.description,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
      };

      // Update the asset service request
      await AssetServiceRequest.updateAssetServiceRequest(
        updatedAssetServiceRequestData,
        assetServiceRequestId
      );

      res
        .status(200)
        .json({ message: "Asset service request updated successfully" });
      logger.info("Asset service Request updated successfully");
    } catch (error) {
      console.error("Error updating asset service request:", error);
      res.status(500).json({ message: "Internal server error" });
      logger.error(
        "Error while updating Asset service Request: " + error.message
      );
    }
  }
);

//http://localhost:3002/assetServiceRequest/deleteAssetServiceRequest/1
router.delete(
  "/deleteAssetServiceRequest/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const assetServiceRequestId = req.params.id;

      // Delete the asset service request
      await AssetServiceRequest.deleteAssetServiceRequest(
        assetServiceRequestId
      );

      res
        .status(200)
        .json({ message: "Asset service request deleted successfully" });
      logger.info("Asset service Request deleted successfully");
    } catch (error) {
      console.error("Error deleting asset service request:", error);
      res.status(500).json({ message: "Internal server error" });
      logger.error(" Error while  deleting Asset service Request ");
    }
  }
);

module.exports = router;
