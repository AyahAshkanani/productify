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
} from "./styles";

import DatePick from "../../datePicking/DatePick";

const AddTask = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState({
    name: "",
    startDate: "",
    endDate: "",
    tag:"none",
    hours: 0,
  });

  const handleAddTask = async () => {
    await taskStore.taskAdd({ ...task, hours: +task.hours }, navigation);
    setTask({ name: "", startDate: "", endDate: "", hours: 0 });
  };

  const [number, onChangeNumber] = useState(null);
  return (
    <>
      <TaskContainer>
        <AddTaskTitle> Add New Task</AddTaskTitle>

        <AddTaskLabels>Task Name</AddTaskLabels>
        <TaskTextInput
          style={styles.input}
          onChangeText={(name) => setTask({ ...task, name })}
          placeholder="Task name"
        />
        <AddTaskLabels>Hours</AddTaskLabels>

        <TaskTextInput
          style={styles.input}
          onChangeText={(event) => setTask({ ...task, hours: event })}
          value={number}
          placeholder="Hours"
          keyboardType="numeric"
        />
        <AddTaskLabels>Task Tag</AddTaskLabels>
        <TaskTextInput
          style={styles.input}
          onChangeText={(tag) => setTask({ ...task, tag })}
          placeholder="Tag"
        />

        <DatePick setTask={setTask} task={task} />
        <AddTaskButton onPress={handleAddTask}>

          <AddTaskButtonText>Add</AddTaskButtonText>
        </AddTaskButton>
      </TaskContainer>
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

// const AddTask = () => {
//   const navigation = useNavigation();
//   const [task, setTask] = useState({
//     name: "",
//     // descasktion: "",
//     startDate: "",
//     endDate: "",
//     hours: "",
//   });

//   //   const handleSubmit = async () => {
//   //     await taskStore.taskAdd(task, navigation);
//   //     navigation.replace("TaskList");
//   //   };
//   const handleAddTask = async () => {
//     const fullTask = { ...task };
//     await taskStore.taskAdd(fullTask, navigation);
//   };
//   //   const [chosenDate, setChosenDate] = useState(new Date());
//   const [number, onChangeNumber] = useState(null);
//   return (
//     <TaskContainer>
//       <TaskTitle>Your Next Task</TaskTitle>
//       <TaskTextInput
//         placeholder="name"
//         autoCapitalize="none"
//         onChangeText={(event) => setTask({ ...task, name: event })}
//       />
//       {/*
//       <TaskTextInput
//         placeholder="descasktion"
//         autoCapitalize="none"
//         multiline
//         numberOfLines={3}
//         onChangeText={(event) => setTask({ ...task, descasktion: event })}
//       /> */}
//       <TaskTextInput
//         style={styles.input}
//         onChangeText={(event) => setTask({ ...task, hours: event })}
//         value={number}
//         placeholder="Hours"
//         keyboardType="numeric"
//       />
//       <DatePick />
//       {/* <DatePicker
//         placeholder="Start Date"
//         date={date}
//         onDateChange={(date) => setDatePick({ date })}
//       /> */}
//       {/* <DatePicker  placeholder="End Date" date={chosenDate} onDateChange={setChosenDate} /> */}
//       <TaskButton onPress={handleAddTask}>
//         <TaskButtonText>Add The Task</TaskButtonText>
//       </TaskButton>
//     </TaskContainer>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
export default observer(AddTask);
