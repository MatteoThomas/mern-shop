import axios from "axios";

// DEVELOPMENT
// const BASE_URL = "http://localhost:5000/api/";

// PRODUCTION
const BASE_URL = "https://ecomm-store-mern.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWI2MjEzZDE4ZmRhZTliM2UxMGJlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQ1ODMyNiwiZXhwIjoxNjMzNTQ0NzI2fQ.d1zq8_tpi1vTVEcGcYl8q0_Md6Jj7rIXucd05y2WDZU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
