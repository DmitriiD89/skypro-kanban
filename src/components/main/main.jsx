import { cardList } from "../../data"
import { Column } from "../column/Column"
import { MainClass, Container, MainBlock, MainContent, } from "./main.styled"

export default function Main({loading}){
    const columnNames=['Без статуса','Нужно сделать','В работе','Тестирование','Готово']
    return (
		<MainClass>
			<Container>
			{loading ? <p className="column__title">Данные загружаются</p> : 
				<MainBlock>
					<MainContent>
					{columnNames.map((columnName) => (
					<Column name={columnName}
						cards={cardList.filter((card)=>card.status === columnName)} ></Column>
				))}
					</MainContent>	
			</MainBlock>
				}
			</Container>
			</MainClass>
		
        
    )
}