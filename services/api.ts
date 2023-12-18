import axios from "axios";

export const api = axios.create({
  //baseURL: "http://localhost:3001",
  baseURL: "http://192.168.3.42:3001",
  timeout: 1000,
});
