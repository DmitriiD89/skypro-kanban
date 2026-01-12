import { Link, useNavigate } from "react-router-dom";
import {
  PopRegister,
  PopRegisterBlock,
  PopRegisterContainer,
  PopRegisterForm,
  PopRegisterInputMail,
  PopRegisterInputName,
  PopRegisterInputPassword,
  PopRegisterNo,
  PopRegisterTtl,
  PopRegisterYes,
} from "./Register.styled";
import { useState } from "react";
import { registerUser } from "../../servises/api";

export function Register({ setIsAuth }) {
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

  async function onSubmit(e) {
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
  return (
    <PopRegister>
      <PopRegisterContainer>
        <PopRegisterBlock>
          <PopRegisterForm onSubmit={onSubmit}>
            <PopRegisterTtl>
              <h2>Регистрация</h2>
            </PopRegisterTtl>
            <PopRegisterInputName
              onInput={changeUserData}
              name="name"
              placeholder="Имя"
            />
            <PopRegisterInputMail
              onInput={changeUserData}
              autoComplete="username"
              name="login"
              placeholder="Эл. почта"
            />
            <PopRegisterInputPassword
              onInput={changeUserData}
              autoComplete="current-password"
              placeholder="Пароль"
              name="password"
              type="password"
            />
            {error && <div>{error}</div>}

            <PopRegisterYes>
              {loading ? "Регистрация..." : "Зарегистрироваться"}
            </PopRegisterYes>

            <PopRegisterNo>
              Уже есть аккаунт? <Link to="/login"> Войдите здесь</Link>
            </PopRegisterNo>
          </PopRegisterForm>
        </PopRegisterBlock>
      </PopRegisterContainer>
    </PopRegister>
  );
}
