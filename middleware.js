const jwt = require("jsonwebtoken");

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    user,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, "Support", options);
}
