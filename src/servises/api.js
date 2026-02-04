import axios from "axios";

const baseHost = "https://wedev-api.sky.pro/api/";
const userHost = `${baseHost}user`;
const tasksHost = `${baseHost}kanban`;
const token = localStorage.getItem("token");

const tasksAxios = axios.create({
  baseURL: tasksHost,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "text/javascript",
  },
});
const userAxios = axios.create({
  baseURL: userHost,
  headers: { "Content-Type": "text/javascript" },
});

export const getTasks = async () => {
  const res = await tasksAxios.get("/");
  return res.data;
};
export const getTaskById = async (id) => {
  const res = await tasksAxios.get(`/${id}`);
  return res.data;
};

export const deleteTaskById = async (id) => {
  await tasksAxios.delete(`/${id}`);
};

export const editTaskById = async (id, task) => {
  await tasksAxios.put(`/${id}`, task);
};

export const newTask = async (task) => {
  await tasksAxios.post("/", task);
};
export const loginUser = async (login, password) => {
  const res = await userAxios.post("/login", { login, password });
  return res.data;
};

export const registerUser = async (name, login, password) => {
  const res = await userAxios.post("/", { name, login, password });
  return res.data;
};
