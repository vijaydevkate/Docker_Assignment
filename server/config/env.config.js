const { config } = require('dotenv');

config();

const dbVars = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
};

const appVars = {
  port: process.env.PORT
};
module.exports = { dbVars, appVars };