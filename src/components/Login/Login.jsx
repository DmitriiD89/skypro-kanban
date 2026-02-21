import { Link } from "react-router-dom";
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
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Login() {
  const { onSubmitLogin, changeUserData, error, loading, resetForm } =
    useContext(AuthContext);
  useEffect(() => {
    resetForm();
  }, []);
  return (
    <PopLogin>
      <PopLoginContainer>
        <PopLoginBlock>
          <PopLoginForm onSubmit={onSubmitLogin}>
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
            {error && <div style={{ color: "red" }}>{error}</div>}

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
