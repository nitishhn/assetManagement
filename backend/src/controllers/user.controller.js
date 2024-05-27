const express = require("express");
const router = express.Router();
const UserService = require("../services/user.services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const logger = require("../utils/loggers");

const authenticateToken = require("../middleware/authenticateToken.middleware");

const registerMiddleware = require("../middleware/userValidate.registerMiddleware");

const loginMiddleware = require("../middleware/userValidate.loginMiddleware");
const userModel = require("../models/user.model");
const authorizeUser = require("../middleware/userauthorization.middleware");
const authorizeAdmin = require("../middleware/adminauthorization.middleware");

// Middleware to log requests
router.use((req, res, next) => {
  logger.info(`Request received: ${req.method} ${req.url}`);
  next();
});

// POST /users/register

// http://localhost:3002/users/Register
router.post("/register", registerMiddleware, async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("Request body is undefined");
    }

    // Check if the email already exists
    const existingEmail = await UserService.getUserByEmail(req.body.email);
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check if the username already exists
    const existingUsername = await UserService.getUserByUsername(
      req.body.username
    );
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const hashedUserObj = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword, // Save the hashed password
      name: req.body.name,
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      address: req.body.address,
      role: req.body.role,
    };

    const result = await UserService.addUser(hashedUserObj);
    logger.info(
      `Registered successfully. Username: ${req.body.username}, Email: ${req.body.email}`
    );
    res.status(201).json({ message: "user registered succesfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    logger.error("User registration failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

/*

router.post("/register", registerMiddleware, async (req, res) => {
  try {
    if (!req.body) {
      throw new Error("Request body is undefined");
    }

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

    console.log("Request body:", req.body);

    // Check if the email already exists
    const existingEmail = await UserService.getUserByEmail(email);
    if (existingEmail) {
      console.log("Email already exists:", email);
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check if the username already exists
    const existingUsername = await UserService.getUserByUsername(username);
    if (existingUsername) {
      console.log("Username already exists:", username);
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedUserObj = {
      username: username,
      email: email,
      password: hashedPassword, // Save the hashed password
      name: name,
      gender: gender,
      phone_number: phone_number,
      address: address,
      role: role,
    };

    console.log("Creating user with data:", hashedUserObj);

    const result = await UserService.addUser(hashedUserObj);
    console.log("User registration result:", result);

    logger.info(
      `Registered successfully. Username: ${username}, Email: ${email}`
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    logger.error("User registration failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

*/

// Route to handle user login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await UserService.getUserByUsername(username);
    if (!user) {
      throw new Error("Invalid username or password");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid username or password");
    }

    // Generate token based on user role
    let token;
    if (user.role === "admin") {
      // Generate admin token
      token = jwt.sign(
        { userId: user.id, role: "admin" },
        process.env.JWT_SECRET,
        {
          expiresIn: "10d", // Token expiration time for admin
        }
      );
    } else if (user.role === "user") {
      // Generate user token
      token = jwt.sign(
        { userId: user.id, role: "user" },
        process.env.JWT_SECRET,
        {
          expiresIn: "10d", // Token expiration time for user
        }
      );
    } else {
      throw new Error("Invalid role");
    }

    // const user = await UserService.getUserByUsername(username);

    logger.info("Login successful. Username: " + username);
    res.status(200).json({
      token,
      role: user.role,
      userId: user.user_id,
      userName: user.username,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    logger.error("User tried to login with invalid credentials");
    res.status(401).json({ message: error.message });
  }
});

// GET /users
router.get("/allUsers", authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    logger.info("All users details were displayed successfully");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    logger.error("Error while displaying users details");
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /users/:id
router.get("/getUserById/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserService.getUserById(userId);
    if (user) {
      res.status(200).json(user);
      logger.info("User details were displayed by ID successfully");
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user by ID:", error);
    logger.error("Error while displaying user details by ID");
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE /users/:id
router.delete(
  "/deleteUserById/:id",
  authenticateToken,
  authorizeAdmin,
  async (req, res) => {
    const userId = req.params.id;
    try {
      await UserService.deleteUser(userId);
      res.status(200).json({ message: "User deleted successfully" });
      logger.info("User details were deleted by ID successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      logger.error("Error while deleting user details by ID");
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// PUT /users/:id
// PUT /users/updateUserById/:id
router.put("/updateUserById/:id", authenticateToken, async (req, res) => {
  const userId = req.params.id;

  const userObj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    gender: req.body.gender,
    phone_number: req.body.phone_number,
    address: req.body.address,
    role: req.body.role,
  };

  try {
    const user = await UserService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await UserService.updateUser(userId, userObj);
    res.status(200).json({ message: "User updated successfully" });
    logger.info("User details were updated by ID successfully");
  } catch (error) {
    console.error("Error updating user:", error);
    logger.error("Error while updating user details by ID");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Reset user password

// Reset user password
router.post("/resetPassword", async (req, res) => {
  const { username, newPassword } = req.body;

  console.log("Received username:", username);
  console.log("Received newPassword:", newPassword);

  if (!newPassword) {
    return res.status(400).json({ message: "New password is required" });
  }

  try {
    // Find the user by username
    const user = await UserService.getUserByUsername(username);

    if (!user) {
      console.log(`User not found: ${username}`); // Add logging
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);

    // Debugging: Check if salt is generated
    console.log("Generated salt:", salt);

    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Debugging: Check if password is hashed
    console.log("Hashed password:", hashedPassword);

    // Update the user's password
    const updateMessage = await UserService.updateUserPassword(
      user.user_id,
      hashedPassword
    );
    res.status(200).json({ message: updateMessage });
    console.log(`Password reset successfully for user: ${username}`);
  } catch (error) {
    console.error("Error resetting password:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.get("/checkEmail/:email", async (req, res) => {
  try {
    const email = req.params.email; // Fixed this line
    const existingEmail = await UserService.getUserByEmail(email);
    res.status(200).json({ exists: !!existingEmail });
  } catch (error) {
    console.error("Error checking email uniqueness:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// In your backend routes file
router.get("/checkUsername/:username", async (req, res) => {
  const username = req.params.username;
  try {
    const user = await UserService.getUserByUsername(username);
    res.status(200).json({ exists: !!user });
  } catch (error) {
    console.error("Error checking username uniqueness:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
