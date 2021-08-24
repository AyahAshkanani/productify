import React, { useState } from "react";

//react-native
import { ScrollView } from "react-native";

//native-base
import { List, Spinner } from "native-base";

//components
import TaskItem from "./taskItem";
import TaskCalendar from "./taskCalendar";
import { Text } from "native-base";

//styles
import {
  ListWrapper,
  NoTasksText,
  TodaysTasksText,
  GreetingMessage,
  ProgressMessage,
} from "./styles";

//stores
import taskStore from "../../stores/taskStore";

//observer
import { observer } from "mobx-react";
import Logout from "../authentication/Logout";
import authStore from "../../stores/authStore";

const TaskList = ({ navigation }) => {
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

  let doneTasks = [];
  if (taskList.length > 0) {
    doneTasks = tasks
      .filter((task) => task.startDate == taskDate)
      .filter((task) => task.done);
  }

  return (
    <>
      <GreetingMessage>Hello, {authStore.user.username}</GreetingMessage>
      {taskList.length === 0 ? (
        <ProgressMessage>Looks like you're free for today.</ProgressMessage>
      ) : (
        <ProgressMessage>
          You are {(doneTasks.length / taskList.length) * 100}% done with
          today's tasks
        </ProgressMessage>
      )}

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
