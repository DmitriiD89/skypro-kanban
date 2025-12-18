import { useParams } from "react-router-dom"
import { cardList } from "../../data"
import { Card } from "../../components/card/card"
import PopBrowse from "../../components/popBrowse/popBrowse"

export function CardPage(){
    const {id} = useParams()
    const card = cardList.find(card=>card.id === +id)
    return (
        <>
        <Card id={card.id} topic={card.topic} title={card.title} date={card.date}/>
    <PopBrowse/>
        </>
   
    )
}