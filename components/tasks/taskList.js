import React, { useState } from "react";

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

const TaskList = () => {
  //{ navigation }
  if (taskStore.loading) return <Spinner />;

  let tasks = taskStore.tasks;
  //get today's date
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let today = new Date().toString();
  let todaysDate = formatDate(today);
  console.log(todaysDate);

  const [todaysTasks, updateTodaysTasks] = useState(
    tasks.filter((task) => task.startDate == todaysDate)
  );

  const changeTodaysTasks = (todaysDate) => {
    updateTodaysTasks(tasks.filter((task) => task.startDate === todaysDate));
  };
  const taskList = todaysTasks.map((task) => (
    <TaskItem task={task} key={task.id} /> //navigation={navigation}
  ));

  console.log(todaysTasks);
  return (
    <>
      <TaskCalendar
        tasks={tasks}
        changeTodaysTasks={changeTodaysTasks}
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
