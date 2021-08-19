import React from "react";
import { useState } from "react";

// components
import DatePick from "../../datePicking/DatePick";
//stores
import authStore from "../../stores/authStore";
import taskStore from "../../stores/taskStore";

//nav
import { useNavigation } from "@react-navigation/native";

//icons
import { FontAwesome5 } from "@expo/vector-icons";

// react native
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
// styles
import {
  AddTaskTitle,
  AddTaskLabels,
  AddTaskButton,
  AddTaskButtonText,
  DeleteTaskTitle,
  UpdateTaskTitle,
} from "./styles";

// mobx
import { observer } from "mobx-react";
const UpdateTask = ({ route }) => {
  const { oldTask } = route.params;

  const [task, setTask] = useState(oldTask);

  const navigation = useNavigation();
  const handleUpdateTask = async () => {
    await taskStore.taskUpdate(task, navigation);
    navigation.navigate("Home");
  };
  const deleteHandler = async () => {
    await taskStore.taskDelete(task.id);
    navigation.replace("Main");
  };
  const submitHandler = () => {
    Alert.alert("Are you sure you want to delete task!", "", [
      { text: "OK", onPress: () => deleteHandler(task.id) },
      { text: "cancel", onPress: () => console.log("cancel"), style: "cancel" },
    ]);
  };
  return (
    <>
      <SafeAreaView>
        <AddTaskTitle> Settings</AddTaskTitle>
        <UpdateTaskTitle>Update</UpdateTaskTitle>
        <AddTaskLabels>Task Name</AddTaskLabels>
        <TextInput
          style={styles.input}
          onChangeText={(name) => setTask({ ...task, name })}
          placeholder="Task Name"
          defaultValue={oldTask.name}
        />
        <AddTaskLabels>Task Start Date</AddTaskLabels>
        <TextInput
          style={styles.input}
          onChangeText={(startDate) => setTask({ ...task, startDate })}
          placeholder="Task StartDate"
          defaultValue={oldTask.startDate}
        />
        <AddTaskLabels>Task End Date</AddTaskLabels>
        <TextInput
          style={styles.input}
          onChangeText={(endDate) => setTask({ ...task, endDate })}
          placeholder="Task End Date"
          defaultValue={oldTask.startDate}
        />
        <AddTaskButton onPress={handleUpdateTask}>
          <AddTaskButtonText>Update</AddTaskButtonText>
        </AddTaskButton>
      </SafeAreaView>
      <DeleteTaskTitle>Delete</DeleteTaskTitle>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={submitHandler}
        // taskStore.deleteTask(task.id)
      >
        {authStore.user?.id === task.userId ? (
          <FontAwesome5
            name="trash"
            size={50}
            color="red"
            align="centre"
            paddingLeft={8}
            width={100}
            flex={1}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
const styles2 = StyleSheet.create({
  input: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
export default observer(UpdateTask);
