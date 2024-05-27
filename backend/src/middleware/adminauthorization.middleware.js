const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    // Admin is authorized
    next();
  } else {
    // Admin is not authorized
    return res.status(403).json({ message: "Forbidden: Admin not authorized" });
  }
};

module.exports = authorizeAdmin;
