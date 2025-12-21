import { Outlet } from "react-router-dom";
import Main from "../../components/main/main";

export function MainPage({loading}) {
    return (
        <>
        <Main loading={loading}/>
        <Outlet/>
        </>
    )
} 