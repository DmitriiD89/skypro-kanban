import { Outlet } from "react-router-dom";
import Main from "../../components/main/main";

export function MainPage() {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}
