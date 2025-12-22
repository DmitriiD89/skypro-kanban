import { Link } from "react-router-dom";
import {
  PopRegister,
  PopRegisterBlock,
  PopRegisterContainer,
  PopRegisterInputMail,
  PopRegisterInputName,
  PopRegisterInputPassword,
  PopRegisterNo,
  PopRegisterTtl,
  PopRegisterYes,
} from "./Register.styled";

export function Register({ setIsAuth }) {
  return (
    <PopRegister>
      <PopRegisterContainer>
        <PopRegisterBlock>
          <PopRegisterTtl>
            <h2>Регистрация</h2>
          </PopRegisterTtl>
          <PopRegisterInputName placeholder="Имя" />
          <PopRegisterInputMail placeholder="Эл. почта" />
          <PopRegisterInputPassword placeholder="Пароль" type='password' />

          
            <PopRegisterYes onClick={() => setIsAuth(true)}>
              <Link to="/">Зарегистрироваться</Link>
            </PopRegisterYes>
          
          <PopRegisterNo>
              Уже есть аккаунт? <Link to="/login"> Войдите здесь</Link>
            </PopRegisterNo>
        </PopRegisterBlock>
      </PopRegisterContainer>
    </PopRegister>
  );
}
