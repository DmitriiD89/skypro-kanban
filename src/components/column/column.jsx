import { MainColumn, ColumnTitle, ColumnTitleP } from "./column.styled";
import { Card } from "../card/card";

export const Column = ({ name, cards }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{name}</ColumnTitleP>
      </ColumnTitle>
      {cards.map((item) => (
        <Card
          key={item._id}
          id={item._id}
          title={item.title}
          topic={item.topic}
          date={item.date}
        ></Card>
      ))}
    </MainColumn>
  );
};
