import React from "react";
//observer
import { observer } from "mobx-react";
import {
  TaskDetailWrapper,
  TaskDetailsStyle,
  DueDate,
  ListWrapper,
  NoTasksText,
  TodaysTasksText,
  GreetingMessage,
  ProgressMessage,
  HomeContainer,
  HomeContent,
  GreetingUserName,
  TaskItemWrapper,
  TaskName,
} from "./styles";
// components
import UpdateButton from "../../buttons/UpdateButton";
import { Ionicons } from "@expo/vector-icons";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
// navigation
import { useNavigation } from "@react-navigation/native";
import TaskTodoList from "../taskTodos/TaskTodoList";
import TaskTodoAdd from "../taskTodos/TaskTodoAdd";
import TaskNoteItem from "../taskNote/TaskNoteItem";
import TaskNoteAdd from "../taskNote/TaskNoteAdd";
// moment
import moment from "moment";
import "moment/locale/en-au";

const TaskDetail = ({ route }) => {
  const { task } = route.params;

  // const currentTimeInDays =
  //   "${startDate}.year() * 365 + ${startDate}.dayOfYear()";
  // const futureTimeInDays = endDate.year() * 365 + endDate.dayOfYear();

  return (
    <HomeContainer style={{ borderTopWidth: 120 }}>
      <HomeContent>
        <GreetingMessage>
          <View style={{ flexDirection: "column" }}>
            <TaskName> {task.name}</TaskName>
            <UpdateButton oldTask={task} style={{ margin: 50}} />
            <DueDate>Due Date </DueDate>
            <DueDate>{task.endDate}</DueDate>
             
          </View>
        </GreetingMessage>
        <ScrollView>
          <TaskItemWrapper>
            <TaskTodoAdd task={task} />
            <TaskTodoList task={task} />

            <TaskNoteItem task={task} />
            <TaskNoteAdd task={task} />
          </TaskItemWrapper>
        </ScrollView>
      </HomeContent>
    </HomeContainer>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});

export default observer(TaskDetail);
