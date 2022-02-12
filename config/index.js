require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URL_LOCAL: process.env.MONGODB_URL_LOCAL,
  MONGODB_URL_CLOUD: process.env.MONGODB_URL_CLOUD,
};
