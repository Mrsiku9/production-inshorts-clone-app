import express from "express";
import { getNews } from "../controller/news-controller.js";

const route = express.Router();

route.get("/api/news", getNews);
export default route;
