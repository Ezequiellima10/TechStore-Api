import { Sequelize } from "sequelize";
import { DATABASE_NAME, DATABASE_PORT, DATABASE_HOST, DATABASE_USERNAME } from "../config/config.js";

const database = DATABASE_NAME;
const username = DATABASE_USERNAME;
const password = ""; //para windows dejar vacio
const dialect = "mysql";
const host = DATABASE_HOST;
const port = DATABASE_PORT;

const connection = new Sequelize(database, username, password, {
    host,
    dialect,
    port,
  });

  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  export default connection;

 