import axios from "./axios";

const api = {
  login: (data) => axios.post("/auth/login", data),

  register: (data) => axios.post("/auth/register", data),
};

export default api;