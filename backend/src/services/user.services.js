const { Op, where } = require("sequelize");
const userModel = require("..//models/user.model");
const assetModel = require("../models/asset.model");
const assetRequestModel = require("../models/asset_request.model");
const assetServiceRequestModel = require("../models/asset_service_request.model");

exports.addUser = async (userObj) => {
  await userModel.create(userObj);
  return "User is Created";
};

exports.getAllUsers = async () => {
  let userArray = await userModel.findAll();
  return userArray;
};

exports.getUserById = async (uid) => {
  let userObj = await userModel.findByPk(uid);
  return userObj;
};

exports.getUserByEmail = async (email) => {
  try {
    const userObj = await userModel.findOne({ where: { email } });
    return userObj;
  } catch (error) {
    throw new Error("Error fetching user by email");
  }
};

/*
exports.getUserByUsername = async (username) => {
  try {
    const userObj = await userModel.findOne({ where: { username } });
    return userObj;
  } catch (error) {
    throw new Error("Error fetching user by username");
  }
};
*/

exports.getUserByUsername = async (username) => {
  try {
    const user = await userModel.findOne({ where: { username } });
    return user;
  } catch (error) {
    throw new Error("Error retrieving user by username");
  }
};

exports.deleteUser = async (uid) => {
  await userModel.destroy({ where: { user_id: uid } });
};

exports.updateUser = async (userId, userObj) => {
  try {
    // First, check if the user exists
    const user = await userModel.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Update the user with the provided data
    await user.update(userObj);

    // Return a success message
    return "User updated successfully";
  } catch (error) {
    throw error;
  }
};

// Update user password
exports.updateUserPassword = async (userId, hashedPassword) => {
  try {
    const [updated] = await userModel.update(
      { password: hashedPassword },
      { where: { user_id: userId } }
    );
    if (!updated) {
      throw new Error("User not found");
    }
    return "Password updated successfully";
  } catch (error) {
    console.error(`Error in updateUserPassword: ${error.message}`);
    throw error;
  }
};

// Update user details
exports.updateUser = async (userId, userObj) => {
  try {
    const [updated] = await userModel.update(userObj, {
      where: { user_id: userId },
    });
    if (!updated) {
      throw new Error("User not found");
    }
    return "User updated successfully";
  } catch (error) {
    console.error(`Error in updateUser: ${error.message}`);
    throw error;
  }
};
