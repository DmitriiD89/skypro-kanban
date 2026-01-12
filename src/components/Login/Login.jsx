import { Link, useNavigate } from "react-router-dom";
import {
  PopLogin,
  PopLoginBlock,
  PopLoginContainer,
  PopLoginForm,
  PopLoginNo,
  PopLoginTtl,
  PopLoginYes,
  PopLoginInputMail,
  PopLoginInputPassword,
} from "./login.styled";
import { useState } from "react";
import { loginUser } from "../../servises/api";

export function Login({ setIsAuth }) {
  const [userData, setUserData] = useState({ login: "", password: "" });
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
  async function onSubmit(e) {
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
  return (
    <PopLogin>
      <PopLoginContainer>
        <PopLoginBlock>
          <PopLoginForm onSubmit={onSubmit}>
            <PopLoginTtl>
              <h2>Вход</h2>
            </PopLoginTtl>
            <PopLoginInputMail
              onInput={changeUserData}
              name="login"
              autoComplete="username"
              placeholder="Эл. почта"
            />
            <PopLoginInputPassword
              onInput={changeUserData}
              autoComplete="current-password"
              name="password"
              placeholder="Пароль"
              type="password"
            />
            {error && <div>{error}</div>}

            <PopLoginYes>{loading ? "Вход..." : "Войти"}</PopLoginYes>

            <PopLoginNo>
              Нужно зарегистрироваться?
              <Link to="/register">Регистрируйтесь здесь</Link>
            </PopLoginNo>
          </PopLoginForm>
        </PopLoginBlock>
      </PopLoginContainer>
    </PopLogin>
  );
}
