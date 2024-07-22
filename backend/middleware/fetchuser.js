const jwt = require("jsonwebtoken");
const JWT_SECRET = "This is a Secret";

const fetchuser = (req, res, next) => {
  // Get the token from the header
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Verify the token
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    if (!res.headersSent) {
      res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = fetchuser;
