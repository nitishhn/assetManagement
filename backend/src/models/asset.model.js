const sequelize = require("sequelize");
const db = require("../database/db");

const assetModel = db.define(
  "Asset",
  {
    asset_id: { type: sequelize.INTEGER, primaryKey: true },
    category_id: { type: sequelize.INTEGER },
    name: { type: sequelize.STRING(255) },
    model: { type: sequelize.STRING(255) },
    manufacturing_date: { type: sequelize.DATE },
    expiry_date: { type: sequelize.DATE },
    price: { type: sequelize.DECIMAL(10, 2) },
    image: { type: sequelize.STRING(255) },
    description: { type: sequelize.STRING(255) },
    quantity: { type: sequelize.INTEGER },
    asset_availability_status: {
      type: sequelize.ENUM("yes", "no"),
      defaultValue: "yes",
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

module.exports = assetModel;
