import React from "react";
//observer
import { observer } from "mobx-react";
import { TaskDetailWrapper, TaskDetailsStyle } from "./styles";
// components
import UpdateButton from "../../buttons/UpdateButton";
import { Ionicons } from "@expo/vector-icons";
import { Button, View, Text } from "native-base";
// stores
import { useNavigation } from "@react-navigation/native";
import TaskTodoList from "../taskTodos/TaskTodoList";

const TaskDetail = ({ route }) => {
  const { task } = route.params;
  console.log(task);

  return (
    <TaskDetailWrapper>
      <TaskDetailsStyle>{task.name}</TaskDetailsStyle>

      <View style={{ display: "flex", flexDirection: " row " }}></View>
      <UpdateButton oldTask={task} />
      <Text>Due Date</Text>
      <Text>{task.endDate}</Text>

      <TaskTodoList task={task} />
    </TaskDetailWrapper>
  );
};

export default observer(TaskDetail);
