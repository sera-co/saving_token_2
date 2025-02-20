const jwt = require("jsonwebtoken");

const SECRET_KEY = "jwt@2025";

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return { error: err.name === "TokenExpiredError" ? "Token has expired" : "Invalid token" };
  }
};

const payload = { userId: 1, email: "test@example.com" };
const token = encrypt(payload);
console.log("Generated Token:", token);

const decoded = decrypt(token);
console.log("Decoded Token:", decoded);
