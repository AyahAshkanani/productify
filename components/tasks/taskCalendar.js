import React from "react";

//component
import { Calendar } from "react-native-calendars";

//observer
import { observer } from "mobx-react";

const TaskCalendar = ({ tasks, handleTaskUpdate }) => {
  let markedDays = {};
  tasks.map((task) => (markedDays[task.startDate] = { marked: true }));
  return (
    <Calendar 
      enableSwipeMonths={true}
      onDayPress={(day) => {
        handleTaskUpdate(day.dateString);
      }}
      style={{margin:15}}
      markedDates={markedDays}
      theme={{
        selectedDayBackgroundColor: "#DE3E50",
        selectedDayTextColor: "white",
      }}
    />
  );
};

export default observer(TaskCalendar);
