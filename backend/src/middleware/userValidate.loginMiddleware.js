const UserService = require("../services/user.services");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginMiddleware = async (req, res, next) => {
  const { username, password, role } = req.body;

  try {
    // Find user by username
    const user = await UserService.getUserByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    // Verify role
    if (!(role === "user" || role === "admin")) {
      throw new Error("Invalid role");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expiration time
    });

    // Attach the token to the request object for future use if needed
    req.token = token;

    // Pass control to the next middleware
    next();
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(401).json({ message: error.message });
  }
};

module.exports = loginMiddleware;
