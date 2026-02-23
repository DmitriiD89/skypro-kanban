import { DayPicker } from "react-day-picker";
import { ru } from "react-day-picker/locale";
import { CalendarText, CalendarTextDate } from "./Calendar.styled";

export function Calendar({ selectedDate, setSelectedDate }) {
  const localDate = new Date(selectedDate).toLocaleDateString();
  let footer = <CalendarText>Выберите срок исполнения</CalendarText>;
  if (selectedDate) {
    footer = (
      <>
        <CalendarText>Срок исполнения</CalendarText>
        <CalendarTextDate>{localDate}</CalendarTextDate>
      </>
    );
  }
  return (
    <DayPicker
      selected={selectedDate}
      footer={footer}
      locale={ru}
      mode="single"
    />
  );
}
