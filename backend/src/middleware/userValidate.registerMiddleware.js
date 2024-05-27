const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserService = require("../services/user.services");

const registerMiddleware = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      name,
      gender,
      phone_number,
      address,
      role,
    } = req.body;

    // Check if all required fields are present
    if (
      !username ||
      !email ||
      !password ||
      !name ||
      !gender ||
      !phone_number ||
      !address ||
      !role
    ) {
      throw new Error("All fields are required");
    }

    // Function to validate email format
    const isValidEmail = (email) => {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    };

    // Validate email format
    if (!isValidEmail(email)) {
      throw new Error("Invalid email format");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user with hashed password
    const userObj = {
      username,
      email,
      password: hashedPassword,
      name,
      gender,
      phone_number,
      address,
      role,
    };

    // Call next middleware or route handler
    next();
  } catch (error) {
    // Handle validation errors
    console.error("Error validating and registering user:", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = registerMiddleware;
