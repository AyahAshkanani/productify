//remove the unused imports
import React from "react";
//observer
import { observer } from "mobx-react";
import { TaskDetailWrapper, TaskDetailsStyle, DueDate } from "./styles";
// components
import UpdateButton from "../../buttons/UpdateButton";
import { Ionicons } from "@expo/vector-icons";
import { Button, View, Text } from "native-base";
// stores
import { useNavigation } from "@react-navigation/native";
import TaskTodoList from "../taskTodos/TaskTodoList";
import TaskTodoAdd from "../taskTodos/TaskTodoAdd";
import TaskNoteItem from "../taskNote/TaskNoteItem";
import TaskNoteAdd from "../taskNote/TaskNoteAdd";

const TaskDetail = ({ route }) => {
  const { task } = route.params;

  return (
    <TaskDetailWrapper>
      <TaskDetailsStyle>{task.name}</TaskDetailsStyle>

      <View style={{ display: "flex", flexDirection: " row " }}></View>
      <UpdateButton oldTask={task} style={{ margin: 50 }} />
      <DueDate>Due Date</DueDate>
      <DueDate>{task.endDate}</DueDate>
      <TaskTodoAdd task={task} />
      <TaskTodoList task={task} />
      <TaskNoteAdd task={task} />
      <TaskNoteItem task={task} />
    </TaskDetailWrapper>
  );
};

export default observer(TaskDetail);
