import { Link } from "react-router-dom";
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
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Register() {
  const { onSubmitRegister, changeUserData, error, loading, resetForm } =
    useContext(AuthContext);
  useEffect(() => {
    resetForm();
  }, []);
  return (
    <PopRegister>
      <PopRegisterContainer>
        <PopRegisterBlock>
          <PopRegisterForm onSubmit={onSubmitRegister}>
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
            {error && <div style={{ color: "red" }}>{error}</div>}

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
