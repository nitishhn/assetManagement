const sequelize = require("sequelize");
const db = require("../database/db");

const asset_service_requestModel = db.define(
  "Asset_Service_Request",
  {
    id: { type: sequelize.INTEGER, primaryKey: true },
    user_id: { type: sequelize.INTEGER },
    asset_id: { type: sequelize.INTEGER },
    issue_type: { type: sequelize.ENUM("malfunction", "repair") },
    issue_resolve_status: {
      type: sequelize.ENUM("solved", "unsolved", "rejected"),
    },
    description: { type: sequelize.STRING(255) },
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

module.exports = asset_service_requestModel;
