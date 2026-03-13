import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CalendarText = styled.span`
  font-family: Roboto;
  font-weight: 400;
  font-style: Regular;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  vertical-align: middle;
  color: #94a6be;
`;
export const CalendarTextDate = styled(CalendarText)`
  color: #000;
`;

export const StyledDayPicker = styled(DayPicker)`
  --rdp-day_button-width: 25px;
  --rdp-day_button-height: 25px;
  --rdp-day-height: 25px;
  .rdp-caption_label {
    text-transform: capitalize;
  }
  --rdp-accent-color: #94a6be;
  .rdp-selected .rdp-day_button {
    color: #fff;
    background-color: #94a6be;
    font-size: 10px;
  }
  .rdp-caption_label {
    font-size: 14px;
  }
  .rdp-nav {
    width: 50px;
  }

  font-family: Roboto;
  font-weight: 400;
  font-style: Regular;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  vertical-align: middle;
  color: #94a6be;
`;
