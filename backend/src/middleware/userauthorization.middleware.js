const authorizeUser = (req, res, next) => {
  if (req.user && req.user.role === "user") {
    // User is authorized
    next();
  } else {
    // User is not authorized
    return res.status(403).json({ message: "Forbidden: User not authorized" });
  }
};

module.exports = authorizeUser;
