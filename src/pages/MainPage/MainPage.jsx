import PopNewCard from "../../components/popNewCard/popNewCard";
import Main from "../../components/main/main";
import PopBrowse from "../../components/popBrowse/popBrowse";

export function MainPage({loading}) {
    return (
        <>
        <Main loading={loading}/>
        <PopBrowse/>
        <PopNewCard/>
        </>
    )
} 