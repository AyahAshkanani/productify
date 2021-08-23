import React, { useState } from "react";
import { StyleSheet } from "react-native";

//observer
import { observer } from "mobx-react";

//stores
import taskStore from "../../stores/taskStore";
import preferencesStore from "../../stores/preferencesStore";

//nav
import { useNavigation } from "@react-navigation/native";

//styled components
import {
  TaskContainer,
  TaskTextInput,
  AddTaskTitle,
  AddTaskLabels,
  AddTaskButton,
  AddTaskButtonText,
  AddTextInput,
  AddContainer,
} from "./styles";

//components
import { Input } from "galio-framework";
import DatePick from "../../datePicking/DatePick";

const AddTask = () => {
  var days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const navigation = useNavigation();
  const [task, setTask] = useState({
    name: "",
    startDate: "",
    endDate: "",
    tag: "none",
    hours: 0,
  });

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

  const scheduelSubTasks = async (task) => {
    // let subTasksNum = 1;
    const UserTasks = taskStore.tasks;
    let day = new Date(task.startDate);
    let taskDays = [];
    //check if start and end dates are not equal, otherwise it will remain 1 task
    if (task.startDate === task.endDate) {
      taskDays.push(task.startDate);
    } else {
      while (day <= new Date(task.endDate)) {
        // let dayTasks = UserTasks.filter(
        //   (task) => task.startDate === formatDate(day)
        // ).sort(function (a, b) {
        //   return +a.time.slice(0, 2) - +b.time.slice(0, 2);
        // });

        if (preferencesStore.preferences[days[day.getDay()]]) {
          taskDays.push(formatDate(day));
        }
        day.setDate(day.getDate() + 1);
      }
    }

    // subTasksNum = taskDays.length;

    for (let i = 0; i < taskDays.length; i++) {
      let subTaskTime = 0;
      let dayTasks = UserTasks.filter(
        (task) => task.startDate === taskDays[i]
      ).sort(function (a, b) {
        return +a.time.slice(0, 2) - +b.time.slice(0, 2);
      });

      if (dayTasks.length === 0) {
        subTaskTime = "09:00";
      } else {
        subTaskTime = `${
          +dayTasks[dayTasks.length - 1].time.slice(0, 2) +
          +dayTasks[dayTasks.length - 1].hours
        }:00`;
      }

      await taskStore.taskAdd(
        {
          ...task,
          hours: +task.hours / taskDays.length,
          startDate: taskDays[i],
          endDate: taskDays[i],
          time: subTaskTime,
        },
        navigation
      );
      // day.setDate(day.getDate() + 1);
    }
  };

  const handleAddTask = async () => {
    //scheduel first
    //then add each new subtask
    scheduelSubTasks(task);
    setTask({ name: "", startDate: "", endDate: "", hours: 0 });
  };

  const [number, onChangeNumber] = useState(null);
  return (
    <>
      {/* <TaskContainer> */}
      <AddContainer></AddContainer>
      <AddTaskTitle> Add New Task</AddTaskTitle>
      <AddTaskLabels>Task Name</AddTaskLabels>
      <Input
        value={task.name}
        style={styles.input}
        onChangeText={(name) => setTask({ ...task, name })}
        placeholder="Task name"
      />
      <AddTaskLabels>Hours</AddTaskLabels>
      <Input
        value={task.hours}
        style={styles.input}
        onChangeText={(event) => setTask({ ...task, hours: event })}
        value={number}
        placeholder="Hours"
        keyboardType="numeric"
      />

      <AddTaskLabels>Task Tag</AddTaskLabels>
      <TaskTextInput
        value={task.tag}
        style={styles.input}
        onChangeText={(tag) => setTask({ ...task, tag })}
        placeholder="Tag"
      />

      {/* <AddContainer> */}
      <DatePick setTask={setTask} task={task} />
      {/* </AddContainer> */}
      <AddTaskButton onPress={handleAddTask}>
        <AddTaskButtonText>Add</AddTaskButtonText>
      </AddTaskButton>
      {/* </TaskContainer> */}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    marginTop: 12,
    padding: 10,
  },
});

export default observer(AddTask);
