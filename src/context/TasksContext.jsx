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
  const [taskInfo, setTaskInfo] = useState({
    title: "",
    topic: "Web Design",
    status: "Без статуса",
    description: "",
  });
  const [activeTopic, setActiveTopic] = useState("Web Design");
  const navigate = useNavigate();
  const [currentTask, setCurrentTask] = useState({});
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  async function fetchTasks() {
    try {
      const res = await getTasks();
      setTasks(res.tasks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchNewTask(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await newTask(taskInfo);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function changeTaskInfo(e) {
    const { name, value } = e.target;
    setTaskInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  }
  function handleActiveTopic(topicName) {
    setActiveTopic(topicName);
    setTaskInfo((prev) => ({
      ...prev,
      topic: topicName,
    }));
  }

  async function fetchEditTaskById(id) {
    const { description, status } = taskInfo;
    try {
      setLoading(true);
      await editTaskById(id, { description, status });
      navigate("/");
    } catch (error) {
      setError(error.message);
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
    fetchTaskById,
    fetchTasks,
    fetchEditTaskById,
    tasks,
    error,
    loading,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
