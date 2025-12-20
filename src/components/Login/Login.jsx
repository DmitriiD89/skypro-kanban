import { Link } from "react-router-dom";
import { PopLogin, PopLoginBlock, PopLoginContainer, PopLoginForm, PopLoginNo, PopLoginTtl, PopLoginYes, PopLoginInputMail, PopLoginInputPassword } from "./login.styled";

export function Login({setIsAuth}){
  
  
    return (
       <PopLogin>
         <PopLoginContainer>
         <PopLoginBlock>
         <PopLoginTtl>
         <h2>Вход</h2>
         </PopLoginTtl>
         <PopLoginInputMail placeholder="Эл. почта"/>
         <PopLoginInputPassword placeholder="Пароль" type='password'/>
        <PopLoginForm>
        <PopLoginYes onClick={setIsAuth}><Link to='/'>Войти</Link></PopLoginYes>           
        </PopLoginForm>
        <PopLoginNo>Нужно зарегистрироваться?<Link to='/register'>Регистрируйтесь здесь</Link></PopLoginNo> 
         </PopLoginBlock>
         </PopLoginContainer>
         

       </PopLogin>
       
    )
}