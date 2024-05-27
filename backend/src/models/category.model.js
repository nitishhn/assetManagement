const sequelize = require("sequelize");
const db = require("../database/db");

const categoryModel = db.define(
  "Category",
  {
    category_id: { type: sequelize.INTEGER, primaryKey: true },
    slug: { type: sequelize.STRING(255) },
    name: { type: sequelize.STRING(255) },
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

module.exports = categoryModel;
