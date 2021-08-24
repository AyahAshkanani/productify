import React from "react";

//component
import { Calendar } from "react-native-calendars";
import { CalendarContainer } from "./styles";

//observer
import { observer } from "mobx-react";
import { View } from "react-native";

const TaskCalendar = ({ tasks, handleTaskUpdate }) => {
  let markedDays = {};
  tasks.map((task) => (markedDays[task.startDate] = { marked: true }));
  return (
    <CalendarContainer>
      <Calendar
        enableSwipeMonths={true}
        onDayPress={(day) => {
          handleTaskUpdate(day.dateString);
        }}
        style={{ margin: 17, borderRadius: 13 }}
        markedDates={markedDays}
        theme={{
          selectedDayBackgroundColor: "#DE3E50",
          selectedDayTextColor: "white",
          selectedDotColor: "#ffffff",
          indicatorColor: "blue",
        }}
      />
    </CalendarContainer>
  );
};

export default observer(TaskCalendar);
