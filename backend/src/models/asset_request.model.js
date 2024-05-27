const sequelize = require("sequelize");
const db = require("../database/db");

const asset_requestModel = db.define(
  "Asset_Request",
  {
    id: { type: sequelize.INTEGER, primaryKey: true },
    user_id: { type: sequelize.INTEGER },
    asset_id: { type: sequelize.INTEGER },
    assetname: { type: sequelize.STRING(255) },
    username: { type: sequelize.STRING(255) },
    asset_description: { type: sequelize.STRING(255) },
    asset_request_type: { type: sequelize.ENUM("borrow", "return") },
    asset_request_status: {
      type: sequelize.ENUM("pending", "verified", "rejected"),
    },
    created_at: {
      type: sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: sequelize.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: false, // Disable timestamps (createdAt and updatedAt) for this model
  }
);

module.exports = asset_requestModel;
