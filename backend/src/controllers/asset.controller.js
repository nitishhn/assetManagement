const express = require("express");
const router = express.Router();
const AssetService = require("../services/asset.services");
const logger = require("../utils/loggers");
const authenticateToken = require("../middleware/authenticateToken.middleware");
const authorizeAdmin = require("../middleware/adminauthorization.middleware");
const authorizeUser = require("../middleware/userauthorization.middleware");

// Middleware to log requests
router.use((req, res, next) => {
  logger.info(`Request received: ${req.method} ${req.url}`);
  next();
});

// POST /assets/createAsset
router.post(
  "/createAsset",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    try {
      const assetData = {
        category_id: req.body.category_id,
        name: req.body.name,
        model: req.body.model,
        manufacturing_date: req.body.manufacturing_date,
        expiry_date: req.body.expiry_date,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        quantity: req.body.quantity,
        asset_availability_status: req.body.asset_availability_status,
        // Add other fields as needed
      };

      const result = await AssetService.createAsset(assetData);
      logger.info("Asset created successfully");
      res.status(201).json({ message: result });
    } catch (error) {
      console.error("Error creating asset:", error);
      logger.error("Error creating asset");
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// GET /assets/allAssets
router.get("/getAllAssets", async (req, res) => {
  try {
    const assets = await AssetService.getAllAssets();
    logger.info("All assets details were displayed successfully");
    res.status(200).json(assets);
  } catch (error) {
    console.error("Error getting assets:", error);
    logger.error("Error getting assets");
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /assets/getAssetById/:id
router.get("/getAssetById/:id", async (req, res) => {
  const assetId = req.params.id;
  try {
    const asset = await AssetService.getAssetById(assetId);
    if (asset) {
      res.status(200).json(asset);
      logger.info("Asset details were displayed by ID successfully");
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } catch (error) {
    console.error("Error getting asset by ID:", error);
    logger.error("Error getting asset by ID");
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE /assets/deleteAssetById/:id
router.delete(
  "/deleteAssetById/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const assetId = req.params.id;
    try {
      await AssetService.deleteAsset(assetId);
      res.status(200).json({ message: "Asset deleted successfully" });
      logger.info("Asset details were deleted by ID successfully");
    } catch (error) {
      console.error("Error deleting asset:", error);
      logger.error("Error deleting asset by ID");
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// PUT /assets/updateAssetById/:id
//http://localhost:3002/assets/updateAssetById/1
router.put(
  "/updateAssetById/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const assetId = req.params.id;

    const assetData = {
      category_id: req.body.category_id,
      name: req.body.name,
      model: req.body.model,
      manufacturing_date: req.body.manufacturing_date,
      expiry_date: req.body.expiry_date,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      quantity: req.body.quantity,
      asset_availability_status: req.body.asset_availability_status,
      // Add other fields as needed
    };

    try {
      const asset = await AssetService.getAssetById(assetId);
      if (!asset) {
        return res.status(404).json({ message: "Asset not found" });
      }
      await AssetService.updateAsset(assetId, assetData);
      res.status(200).json({ message: "Asset updated successfully" });
      logger.info("Asset details were updated by ID successfully");
    } catch (error) {
      console.error("Error updating asset:", error);
      logger.error("Error updating asset by ID");
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;
