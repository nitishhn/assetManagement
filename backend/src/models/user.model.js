/*  const sequelize = require("sequelize");
const db = require("../database/db");

const userModel = db.define(
  "User",
  {
    user_id: { type: sequelize.INTEGER, primaryKey: true },
    username: { type: sequelize.STRING(50) },
    email: { type: sequelize.STRING(50) },
    password: { type: sequelize.STRING(50) },
    name: { type: sequelize.STRING(50) },
    gender: { type: sequelize.ENUM("male", "female", "other") },
    phone_number: { type: sequelize.STRING(50) },
    address: { type: sequelize.STRING(50) },
    role: { type: sequelize.ENUM("user", "admin") },
    created_at: { type: sequelize.DATE, defaultValue: sequelize.NOW },
    updated_at: { type: sequelize.DATE, defaultValue: sequelize.NOW },
  },
  {
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: false, // Disable timestamps (createdAt and updatedAt) for this model
  }
);

module.exports = userModel;


*

const { DataTypes } = require("sequelize");
const db = require("../database/db");

const userModel = db.define(
  "User",
  {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(50) },
    email: { type: DataTypes.STRING(50) },
    password: { type: DataTypes.STRING(50) },
    name: { type: DataTypes.STRING(50) },
    gender: { type: DataTypes.ENUM("male", "female", "other") },
    phone_number: { type: DataTypes.STRING(50) },
    address: { type: DataTypes.STRING(50) },
    role: { type: DataTypes.ENUM("user", "admin") },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: false, // Disable timestamps (createdAt and updatedAt) for this model
  }
);

module.exports = userModel;

*/

const db = require("../database/db");
const { DataTypes } = require("sequelize");

const userModel = db.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING(50), allowNull: false },
    password: { type: DataTypes.STRING(50), allowNull: false },
    name: { type: DataTypes.STRING(50), allowNull: false },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: false,
    },
    phone_number: { type: DataTypes.STRING(50), allowNull: false },
    address: { type: DataTypes.STRING(50), allowNull: false },
    role: { type: DataTypes.ENUM("user", "admin"), allowNull: false },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: false, // Disable timestamps (createdAt and updatedAt) for this model
  }
);

module.exports = userModel;
