import { Column } from "../column/Column";

import { MainClass, Container, MainBlock, MainContent } from "./main.styled";
import { useContext, useEffect } from "react";
import { ColumnTitleP } from "../column/column.styled";
import { TasksContext } from "../../context/TasksContext";

export default function Main() {
  const { error, loading, fetchTasks, tasks } = useContext(TasksContext);
  const columnNames = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    fetchTasks();
  }, []);
  if (error) {
    return (
      <MainClass>
        <Container>{error}</Container>
      </MainClass>
    );
  }
  return (
    <MainClass>
      <Container>
        {loading ? (
          <ColumnTitleP>Данные загружаются</ColumnTitleP>
        ) : (
          <MainBlock>
            <MainContent>
              {columnNames.map((columnName, index) => (
                <Column
                  key={index}
                  name={columnName}
                  cards={tasks.filter((card) => card.status === columnName)}
                ></Column>
              ))}
            </MainContent>
          </MainBlock>
        )}
      </Container>
    </MainClass>
  );
}
