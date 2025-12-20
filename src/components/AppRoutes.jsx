
import  Header  from "./header/header";
import { CardPage } from "../pages/CardPage/CardPage";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyles";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { NewCardPage } from "../pages/NewCardPage/NewCardPage";
import { PopBrowsePage } from "../pages/PopBrowsePage/PopBrowsePage";


function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  export const toggleAuth = (e) => {
      e.preventDefault()
      setIsAuth(true)
    }
  
  
  const ProtectedRoute = ({children}) => {
    if (isAuth){
      return children
    } return <Navigate to='/login'/>
  }
  return (
    <>
      <GlobalStyle />
         <div className="wrapper">
            <Header />
         <Routes>
            <Route path='/login' element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path='/register' element={<RegisterPage setIsAuth={setIsAuth}/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
            {/* Публичные пути */}
            <Route path="/" element={<ProtectedRoute><MainPage loading={loading}/></ProtectedRoute>} />
            <Route path='/new-card' element={<ProtectedRoute><MainPage loading={loading}/><NewCardPage/></ProtectedRoute>}/>
            <Route path='/card/:id' element={<ProtectedRoute><CardPage/></ProtectedRoute>}/>
            <Route path='/exit' element={<ProtectedRoute><MainPage loading={loading}/><ExitPage setIsAuth={setIsAuth}/></ProtectedRoute>}/>
            <Route path='/browse' element={<ProtectedRoute><PopBrowsePage/></ProtectedRoute>}/>
        </Routes>
        </div>
     
    </>
  );
}
export default AppRoutes;
