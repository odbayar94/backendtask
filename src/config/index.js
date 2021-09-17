const dotenv = require("dotenv");
dotenv.config();

const config = {
  dburl: process.env.DBURL,
  defaultUri: process.env.DEFUALTURI,
  defaultUriDb: process.env.DEFUALTURI1,
  homePage: process.env.HOMEPAGE
};

module.exports = config;
