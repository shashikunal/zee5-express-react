const express = require("express");
const { success, error, info } = require("consola");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const { DbConnection } = require("./config/db");
const { PORT, NODE_ENV } = require("./config");

const AuthRoutes = require("./routes/auth");
const app = express();

let StartServer = async () => {
  /*--------------database connection--started here----------------*/
  DbConnection();
  /*--------------database connection ended here------------------*/
  /*--------------Middleware section starts here------------------*/
  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use(express.json());
  app.use(cors());

  /*--------------Middleware section ends here------------------*/
  /*------------listen port ------------------------------*/

  /*------------LOAD ALL ROUTES -----------------*/
  app.use("/api/auth", AuthRoutes);
  app.listen(PORT, err => {
    if (err) throw err;
    info(`server is running on port number ${PORT}`.red.bold);
  });
  /*-----------listen port ended here -------------------*/
};

StartServer();
