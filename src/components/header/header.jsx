import { HeaderBlock, HeaderClass, HeaderNav, HeaderLogo, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./header.styled"
import { Container } from "../main/main.styled"
export default function Header() {
  return(
<HeaderClass>
  <Container>
    <HeaderBlock>
      <HeaderLogo>
      <a href="" target="_self">
            <img src="images/logo.png" alt="logo" />
          </a>
      </HeaderLogo>
      {/* <HeaderLogo>
      <a href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </a>
      </HeaderLogo> */}
       <HeaderNav>
       <button className="header__btn-main-new _hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </button>
          <a href="#user-set-target" className="header__user _hover02">
            Ivan Ivanov
          </a>
          <div
            className="header__pop-user-set pop-user-set"
            id="user-set-target"
          >
            {/* <a href="">x</a> */}
            <PopUserSetName>Ivan Ivanov</PopUserSetName>
            <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
            <PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
            </PopUserSetTheme>
            <button type="button" className="_hover03">
              <a href="#popExit">Выйти</a>
            </button>
          </div>
       </HeaderNav>
       
    </HeaderBlock>
  
  </Container>
</HeaderClass>
  )
}
