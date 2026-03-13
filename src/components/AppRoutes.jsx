import Header from "./header/header";
import { CardPage } from "../pages/CardPage/CardPage";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { GlobalStyle } from "../GlobalStyles";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { NewCardPage } from "../pages/NewCardPage/NewCardPage";
import { PopBrowsePage } from "../pages/PopBrowsePage/PopBrowsePage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function AppRoutes() {
  const ProtectedRoute = () => {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  };

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoute />}>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <MainPage />
                </>
              }
            >
              <Route path="browse/:id" element={<PopBrowsePage />} />
              <Route path="new-card" element={<NewCardPage />} />
            </Route>

            <Route
              path="/card/:id"
              element={
                <>
                  <Header />
                  <CardPage />
                </>
              }
            />

            <Route path="/exit" element={<ExitPage />} />
          </Route>

          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}
export default AppRoutes;
