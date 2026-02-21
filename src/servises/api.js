import axios from "axios";

const baseHost = "https://wedev-api.sky.pro/api/";
const userHost = `${baseHost}user`;
const tasksHost = `${baseHost}kanban`;

const userAxios = axios.create({
  baseURL: userHost,
  headers: { "Content-Type": "text/javascript" },
});
function getTasksAxios() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: tasksHost,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/javascript",
    },
  });
}
export const getTasks = async () => {
  const tasksAxios = getTasksAxios();
  const res = await tasksAxios.get("/");
  return res.data;
};
export const getTaskById = async (id) => {
  const tasksAxios = getTasksAxios();
  const res = await tasksAxios.get(`/${id}`);
  return res.data;
};

export const deleteTaskById = async (id) => {
  const tasksAxios = getTasksAxios();
  await tasksAxios.delete(`/${id}`);
};

export const editTaskById = async (id, task) => {
  const tasksAxios = getTasksAxios();
  await tasksAxios.put(`/${id}`, task);
};

export const newTask = async (task) => {
  const tasksAxios = getTasksAxios();
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
