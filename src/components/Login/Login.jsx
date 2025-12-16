import { Link } from "react-router-dom";
import { PopLogin, PopLoginBlock, PopLoginContainer, PopLoginForm, PopLoginNo, PopLoginTtl, PopLoginYes } from "./login.styled";

export function Login({setIsAuth}){
    return (
       <PopLogin>
         <PopLoginContainer>
         <PopLoginBlock>
         <PopLoginTtl>
         <h2>Авторизуйтесь</h2>
         </PopLoginTtl>
        <PopLoginForm>
        <PopLoginYes onClick={()=>setIsAuth(true)}><Link to='/'>Авторизоваться</Link></PopLoginYes>
        <PopLoginNo><Link to='/register'>Зарегистрироваться</Link></PopLoginNo>                    
        </PopLoginForm>
               
         </PopLoginBlock>
         </PopLoginContainer>
         

       </PopLogin>
       
    )
}