import {
  HeaderBlock,
  HeaderClass,
  HeaderNav,
  HeaderLogo,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  HeaderUser,
  HeaderPopUserSet,
  PopUserSetButton,
} from "./header.styled";
import { Container } from "../main/main.styled";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const userName = JSON.parse(localStorage.getItem("userName"));
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  return (
    <HeaderClass>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <Link to="/" target="_self">
              <img
                src={
                  isDarkTheme
                    ? "/public/images/logo_dark.png"
                    : "/public/images/logo.png"
                }
                alt="logo"
              />
            </Link>
          </HeaderLogo>

          <HeaderNav>
            <button
              onClick={() => navigate("/new-card")}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу
            </button>
            <HeaderUser onClick={onClickHandler}>{userName.login}</HeaderUser>

            {isOpen && (
              <HeaderPopUserSet>
                <PopUserSetName>{userName.name}</PopUserSetName>
                <PopUserSetMail>{userName.login}</PopUserSetMail>
                <PopUserSetTheme>
                  <p>{isDarkTheme ? "Темная тема" : "Светлая тема"}</p>
                  <input
                    onChange={toggleTheme}
                    checked={isDarkTheme}
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  />
                </PopUserSetTheme>
                <PopUserSetButton>
                  <Link to="/exit">Выйти</Link>
                </PopUserSetButton>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderClass>
  );
}
export default Header;
