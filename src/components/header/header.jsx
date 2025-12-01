import { HeaderBlock, HeaderClass, HeaderNav, HeaderLogo, PopUserSetMail, PopUserSetName, PopUserSetTheme, HeaderUser, HeaderPopUserSet } from "./header.styled"
import { Container } from "../main/main.styled"

const [isOpen, setIsOpen] = useState(false)
 const onClickHandler = () => {
  setIsOpen(!isOpen)
 }

 export default function Header() {
 
 return(
<HeaderClass>
  <Container>
    <HeaderBlock>
      <HeaderLogo>
      <a href="" target="_self">
            <img src="/public/images/logo.png" alt="logo" />
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
          <HeaderUser onClick={onClickHandler} href="#user-set-target">Ivan Ivanov</HeaderUser>
          {/* <a href="#user-set-target" className="header__user _hover02">
            Ivan Ivanov
          </a> */}
          <HeaderPopUserSet
            
            id="user-set-target"
          >
            <a href=""></a>
            <PopUserSetName>Ivan Ivanov</PopUserSetName>
            <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
            <PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
            </PopUserSetTheme>
            <button type="button" className="_hover03">
              <a href="#popExit">Выйти</a>
            </button>
          </HeaderPopUserSet>
       </HeaderNav>
       
    </HeaderBlock>
  
  </Container>
</HeaderClass>
  )
}
