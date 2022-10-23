import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5107/api",
  headers: {
    "Content-type": "application/json"
  }
});