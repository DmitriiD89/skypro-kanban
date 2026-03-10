import { createContext, useState } from "react";
import {
  deleteTaskById,
  editTaskById,
  getTaskById,
  getTasks,
  newTask,
} from "../servises/api";
import { useNavigate } from "react-router-dom";

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
  const [taskInfo, setTaskInfo] = useState({});
  const [activeTopic, setActiveTopic] = useState("Web Design");
  const navigate = useNavigate();
  const [currentTask, setCurrentTask] = useState({});

  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState("");
  const [errorModal, setErrorModal] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchTasks() {
    try {
      setError("");
      setErrorModal("");
      const res = await getTasks();
      setTasks(res.tasks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setTaskInfo({});
    }
  }
  async function fetchTaskById(id) {
    try {
      setLoading(true);
      const res = await getTaskById(id);
      setCurrentTask(res.task);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchDeleteTaskById(id) {
    try {
      setLoading(true);
      await deleteTaskById(id);
      navigate("/");
    } catch (error) {
      setErrorModal(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchNewTask(e) {
    e.preventDefault();
    const { description, title, topic } = taskInfo;
    if (!description || !title) {
      setErrorModal("Заполните все поля");
      return;
    }
    try {
      setLoading(true);
      await newTask({ description, title, topic });
      navigate("/");
    } catch (error) {
      setErrorModal(error.message);
    } finally {
      setLoading(false);
    }
  }

  function getCurrentTask(id) {
    const task = tasks.find((item) => item._id === id);
    setCurrentTask(task);
  }

  function changeTaskInfo(e) {
    const { name, value } = e.target;
    setTaskInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorModal("");
  }

  function changeCurrentTask(e) {
    const { name, value } = e.target;
    setCurrentTask((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorModal("");
  }
  function handleActiveTopic(topicName) {
    setActiveTopic(topicName);
    setTaskInfo((prev) => ({
      ...prev,
      topic: topicName,
    }));
  }

  async function fetchEditTaskById(id) {
    if (!currentTask.description) {
      setErrorModal("Заполните все поля");
      return;
    }
    try {
      setLoading(true);
      await editTaskById(id, currentTask);
      navigate("/");
    } catch (error) {
      setErrorModal(error.message);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    activeTopic,
    handleActiveTopic,
    changeTaskInfo,
    fetchNewTask,
    fetchDeleteTaskById,
    currentTask,
    changeCurrentTask,
    getCurrentTask,
    fetchTaskById,
    fetchTasks,
    fetchEditTaskById,
    tasks,
    error,
    errorModal,
    loading,
    taskInfo,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
