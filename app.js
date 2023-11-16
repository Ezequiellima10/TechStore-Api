import express from "express";
import router from "./routes/router.js";
import connection from "./connection/connection.js";
import cookieParser from "cookie-parser";
import { SERVER_PORT } from "./config/config.js";
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.use("/api", router);

await connection.sync({ force: false });

app.listen(8080, () => {
  console.log(`🚀 ~ app.listen ~ listen: http://localhost:${SERVER_PORT}`);
});