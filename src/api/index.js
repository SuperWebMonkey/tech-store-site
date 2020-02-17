import axios from 'axios'

const api = axios.create({
  baseURL: "http://edgewoodcreamery.xyz/Edgewood-API/public/api",
  headers: { "Accept": "application/json" }
});

export default api