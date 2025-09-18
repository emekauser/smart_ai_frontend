import axios from "axios";
import { getToken } from "./AppCookie";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

const token = getToken();
if (token) {
  instance.defaults.headers.common["Authorization"] = `Token ${token}`;
}

export default instance;
