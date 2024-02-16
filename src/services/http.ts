import axios from "axios";

const PROD_URL = "";
const DEV_URL = "http://localhost:8888";

const http = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL,
});

export default http;
