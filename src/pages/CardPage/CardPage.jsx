import { Outlet, useParams } from "react-router-dom";
import { Card } from "../../components/card/card";
import { useContext, useEffect } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Container, MainClass } from "../../components/main/main.styled";

export function CardPage() {
  const { id } = useParams();
  const { fetchTaskById, loading, currentTask, error } =
    useContext(TasksContext);
  useEffect(() => {
    fetchTaskById(id);
  }, [id]);
  if (error) {
    return (
      <MainClass>
        <Container>{error}</Container>
      </MainClass>
    );
  }
  return (
    <>
      {loading ? (
        "Загрузка"
      ) : (
        <>
          <Card
            id={currentTask._id}
            topic={currentTask.topic}
            title={currentTask.title}
            date={currentTask.date}
          />
          <Outlet />
        </>
      )}
    </>
  );
}
