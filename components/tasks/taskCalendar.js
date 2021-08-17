import React from "react";
import { Calendar } from "react-native-calendars";

const TaskCalendar = ({ tasks, changeTodaysTasks }) => {
  let markedDays = {};
  tasks.map((task) => (markedDays[task.startDate] = { marked: true }));
  return (
    <Calendar
      onDayPress={(day) => {
        changeTodaysTasks(day.dateString);
      }}
      markedDates={markedDays}
    />
  );
};

export default TaskCalendar;
