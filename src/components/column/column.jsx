
import { MainColumn,
         ColumnTitle,
         ColumnTitleP,
        } from "./column.styled"
 import { Card } from "../card/card"

export const Column = ({ name, cards }) => {
    
    
    return (
        <MainColumn><ColumnTitle><ColumnTitleP><p>{name}</p></ColumnTitleP></ColumnTitle>
        {cards.map((item) => (
            <Card
            key={item.id}
            id={item.id}
            title={item.title}
            topic={item.topic}
            date={item.date}></Card>
            ))}</MainColumn>
       
    )
}