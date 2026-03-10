import { Column } from "../column/Column";

import {
  MainClass,
  Container,
  MainBlock,
  MainContent,
  EmptyTasks,
} from "./main.styled";
import { useContext, useEffect } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Loading } from "../Loading/loading";

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
        <MainBlock>
          <MainContent>
            {loading ? (
              columnNames.map((columnName) => <Loading name={columnName} />)
            ) : tasks.length ? (
              columnNames.map((columnName, index) => (
                <Column
                  key={index}
                  name={columnName}
                  cards={tasks.filter((card) => card.status === columnName)}
                ></Column>
              ))
            ) : (
              <EmptyTasks>Задач нет</EmptyTasks>
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </MainClass>
  );
}
