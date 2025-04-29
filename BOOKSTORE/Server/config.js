require("dotenv").config();

const mongoDBURL = process.env.MONGODB_URL;
const port = process.env.PORT || 3434;

module.exports = {
  mongoDBURL,
  port,
};