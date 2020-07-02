import axios from "axios";

const api = axios.create({
  baseURL:
    !process.env.NODE_ENV === "development"
      ? "http://localhost:3333"
      : "https://iintoska2.ips.pt/volunteering",
});

export default api;
