import React, { useState, useEffect } from "react";

//react-native
import { ScrollView } from "react-native";

//native-base
import { List, Spinner } from "native-base";

//components
import TaskItem from "./taskItem";
import TaskCalendar from "./taskCalendar";

//styles
import { ListWrapper, NoTasksText, TodaysTasksText } from "./styles";

//stores
import taskStore from "../../stores/taskStore";

//observer
import { observer } from "mobx-react";
import Logout from "../authentication/Logout";

const TaskList = ({ navigation }) => {
  // useEffect(() => {
  //   taskStore.fetchUserTasks();
  // }, []);
  //{ navigation }
  //get today's date
  let today = new Date().toString();
  let todaysDate = formatDate(today);
  const [taskDate, updateTaskDate] = useState(todaysDate);
  const handleTaskUpdate = (date) => {
    updateTaskDate(date);
  };
  if (taskStore.loading) return <Spinner />;
  let tasks = taskStore.tasks;

  //format date
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const taskList = tasks
    .filter((task) => task.startDate == taskDate)
    .sort(function (a, b) {
      return +a.time.slice(0, 2) - +b.time.slice(0, 2);
    })
    .map((task) => (
      <TaskItem task={task} key={task.id} navigation={navigation} />
    ));
  return (
    <>
      <TaskCalendar
        tasks={tasks}
        handleTaskUpdate={handleTaskUpdate}
      ></TaskCalendar>
      <ScrollView>
        {taskList.length > 0 ? (
          <>
            <TodaysTasksText>Today's tasks</TodaysTasksText>
            <ListWrapper>
              <List>{taskList}</List>
            </ListWrapper>
          </>
        ) : (
          <NoTasksText>No tasks for this day</NoTasksText>
        )}
        <Logout />
      </ScrollView>
    </>
  );
};

export default observer(TaskList);
