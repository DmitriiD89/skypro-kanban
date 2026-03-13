import {
  ColumnTitle,
  ColumnTitleP,
  MainColumn,
  Cards,
} from "../column/column.styled";
import { LoadingCard, LoadingCardTopic } from "./loading.styled";

export function Loading({ name }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{name}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        <LoadingCard>
          <LoadingCardTopic />
        </LoadingCard>
      </Cards>
    </MainColumn>
  );
}
