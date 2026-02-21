import Header from "./header/header";
import { CardPage } from "../pages/CardPage/CardPage";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { GlobalStyle } from "../GlobalStyles";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { NewCardPage } from "../pages/NewCardPage/NewCardPage";
import { PopBrowsePage } from "../pages/PopBrowsePage/PopBrowsePage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function AppRoutes() {
  const { isAuth } = useContext(AuthContext);
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
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* Публичные пути */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Header />
                <MainPage />
              </ProtectedRoute>
            }
          >
            <Route path="exit" element={<ExitPage />} />
            <Route path="new-card" element={<NewCardPage />} />
            <Route path="browse/:id" element={<PopBrowsePage />}></Route>
          </Route>
          <Route
            path="/card/:id"
            element={
              <ProtectedRoute>
                <Header />
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
