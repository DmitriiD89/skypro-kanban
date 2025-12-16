import { Link } from "react-router-dom"
import { PopRegister, PopRegisterBlock, PopRegisterContainer, PopRegisterForm, PopRegisterNo, PopRegisterTtl, PopRegisterYes } from "./Register.styled"

export function Register({setIsAuth}){
    return (
       <PopRegister>
         <PopRegisterContainer>
         <PopRegisterBlock>
         <PopRegisterTtl>
         <h2>Зарегистрируйтесь</h2>
         </PopRegisterTtl>
        <PopRegisterForm>
        <PopRegisterNo onClick={()=>setIsAuth(true)}><Link to='/'>Зарегистрироваться</Link></PopRegisterNo>                    
        <PopRegisterYes ><Link to='/login'>Авторизоваться</Link></PopRegisterYes>
        </PopRegisterForm>
               
         </PopRegisterBlock>
         </PopRegisterContainer>
         

       </PopRegister>
       
    )
}