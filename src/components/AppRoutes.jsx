import Header from "./header/header";
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
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (isAuth) {
      return children;
    }
    return <Navigate to="/login" />;
  };

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route
            path="/register"
            element={<RegisterPage setIsAuth={setIsAuth} />}
          />
          <Route path="*" element={<NotFoundPage />} />
          {/* Публичные пути */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainPage loading={loading} />
              </ProtectedRoute>
            }
          >
            <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
            <Route path="new-card" element={<NewCardPage />} />
            <Route path="browse/:id" element={<PopBrowsePage />}></Route>
          </Route>
          <Route
            path="/card/:id"
            element={
              <ProtectedRoute>
                <CardPage />
              </ProtectedRoute>
            }
          >
            <Route path="browse" element={<PopBrowsePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default AppRoutes;
