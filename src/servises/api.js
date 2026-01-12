import axios from "axios";

const baseHost = "https://wedev-api.sky.pro/api/";
const userHost = `${baseHost}user`;
const userAxios = axios.create({
  baseURL: userHost,
  headers: { "Content-Type": "text/javascript" },
});

export const loginUser = async (login, password) => {
  const res = await userAxios.post("/login", { login, password });
  return res.data;
};

export const registerUser = async (name, login, password) => {
  const res = await userAxios.post("/", { name, login, password });
  return res.data;
};

// export const loginUser = async (login, password) => {
//   const res = await axios({
//     url: userHost + "/login",
//     method: "POST",
//     data: { login, password },
//     headers: { "Content-Type": "text/javascript" },
//   });
//   return res.data;
// };
