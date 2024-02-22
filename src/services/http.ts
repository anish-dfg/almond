import axios from "axios";
import { CompletionRequest } from "./openai/chat-completions";

const PROD_URL = "";
const DEV_URL = "http://localhost:8888";

export const http = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL,
});

export default {
  getCompletion: (token: string, data: CompletionRequest) => {
  },
};
