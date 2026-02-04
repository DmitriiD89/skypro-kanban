import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../servises/api";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [userData, setUserData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function changeUserData(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  }
  async function onSubmitLogin(e) {
    const { login, password } = userData;
    e.preventDefault();
    if (!login.trim() || !password.trim()) {
      setError("Заполните все поля, пожалуйста");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await loginUser(login, password);
      setIsAuth(true);
      navigate("/");
      localStorage.setItem("token", res.user.token);
    } catch (error) {
      setError("Неверный логин или пароль");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function onSubmitRegister(e) {
    e.preventDefault();
    const { name, login, password } = userData;
    if (!name.trim() || !login.trim() || !password.trim()) {
      setError("Заполните все поля, пожалуйста");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await registerUser(name, login, password);
      setIsAuth(true);
      navigate("/");
      localStorage.setItem("token", res.user.token);
    } catch (error) {
      setError("Логин занят");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  function stayIn(event) {
    event.preventDefault();
    navigate(-1);
  }
  function logOut(event) {
    event.preventDefault();
    setIsAuth(false);
    localStorage.clear();
  }
  const value = {
    loading,
    onSubmitLogin,
    changeUserData,
    error,
    isAuth,
    onSubmitRegister,
    stayIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
