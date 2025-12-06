import { cardList } from "../../data"
import { Column } from "../column/Column"
import { ColumnTitleP } from "../column/column.styled"
import { MainClass, Container, MainBlock, MainContent, } from "./main.styled"

export default function Main({loading}){
    const columnNames=['Без статуса','Нужно сделать','В работе','Тестирование','Готово']
    return (
		<MainClass>
			<Container>
			{loading ? <ColumnTitleP>Данные загружаются</ColumnTitleP> : 
				<MainBlock>
					<MainContent>
					{columnNames.map((columnName,index) => (
					<Column key={index} name={columnName}
						cards={cardList.filter((card)=>card.status === columnName)} ></Column>
				))}
					</MainContent>	
			</MainBlock>
				}
			</Container>
			</MainClass>
		
        
    )
}