import React, { useState } from "react";
import { observer } from "mobx-react";
import taskStore from "../../stores/taskStore";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
// import DatePicker from "react-native-datepicker";
import {
  TaskTitle,
  TaskContainer,
  TaskTextInput,
  TaskButtonText,
  TaskButton,
  AddTaskTitle,
  AddTaskLabels,
  AddTaskButton,
  AddTaskButtonText,
  AddTextInput,
  AddContainer,
} from "./styles";
import { Input } from "galio-framework";
import DatePick from "../../datePicking/DatePick";
import { paddingRight } from "styled-system";

const AddTask = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState({
    name: "",
    startDate: "",
    endDate: "",
    tag: "none",
    hours: 0,
  });

  const handleAddTask = async () => {
    await taskStore.taskAdd({ ...task, hours: +task.hours }, navigation);
    setTask({ name: "", startDate: "", endDate: "", hours: 0 });
  };

  const [number, onChangeNumber] = useState(null);
  return (
    <>
      {/* <TaskContainer> */}
      <AddContainer>  
      <AddTaskTitle> Add New Task</AddTaskTitle>
      <AddTaskLabels>Task Name</AddTaskLabels>
      <Input
        style={styles.input}
        onChangeText={(name) => setTask({ ...task, name })}
        placeholder="Task name"
      />
      <AddTaskLabels>Hours</AddTaskLabels>
      <Input
        style={styles.input}
        onChangeText={(event) => setTask({ ...task, hours: event })}
        value={number}
        placeholder="Hours"
        keyboardType="numeric"
      />

      <AddTaskLabels>Task Tag</AddTaskLabels>
      <Input
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
      </AddContainer>
      {/* </TaskContainer> */}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    marginTop: 10,
  },
});
const styles2 = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "white",
    height: 130,
    marginTop: 12,
    padding: 10,
  },
});

export default observer(AddTask);
