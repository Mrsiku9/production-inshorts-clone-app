// Your main file
import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();
const app = express();
dotenv.config();
app.use(cors());
app.use("/", Route);
app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
const port = process.env.PORT || 8080;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(port, () => {
  console.log(`server is running on ${port} successfully`);
});

DefaultData();
