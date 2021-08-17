import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

//useState
import { useState } from "react";

//native-base
import { List } from "native-base";

//styled components
import { TaskItemWrapper, TaskItemDateAndTime, TaskItemName } from "./styles";
import {TouchableOpacity,  Alert } from "react-native"; 

//libs
import BouncyCheckbox from "react-native-bouncy-checkbox";

//observer
import { observer } from "mobx-react";

//stores
import taskStore from "../../stores/taskStore";
import authStore from "../../stores/authStore";

const TaskItem = ({ task, navigation }) => {
  const [done, markTask] = useState(task.done);
  const toggleTask = async () => {
    await taskStore.markTask(task);
    markTask(!done);
  };
  const submitHandler = () => {
    Alert.alert("Are you sure you want to delete task!", "", [
      { text: "OK", onPress: () => taskStore.deleteTask(task.id) },
      { text: "cancel", onPress: () => console.log("cancel"), style: "cancel" },
    ]);
  };
  return (
    <List.Item
      onPress={() => navigation.navigate("TaskDetail", { task: task })}
    >
      <TaskItemWrapper>
        <BouncyCheckbox
          isChecked={done}
          style={{ alignSelf: "flex-start", margin: 10 }}
          size={25}
          textStyle={{
            alignSelf: "flex-start",
            fontSize: 20,
            color: "black",
          }}
          textStyle={
            done
              ? {
                  alignSelf: "flex-start",
                  fontSize: 20,
                  color: "#D8D8D8",
                }
              : {
                  alignSelf: "flex-start",
                  fontSize: 20,
                  color: "black",
                }
          }
          fillColor="#D8D8D8"
          unfillColor="transparent"
          text={task.name}
          iconStyle={{ borderColor: "#D8D8D8" }}
          onPress={() => {
            toggleTask();
          }}
        />
        <TaskItemDateAndTime style={{ color: "blue" }}>{task.tag}</TaskItemDateAndTime>
        <TaskItemDateAndTime>{task.endDate}</TaskItemDateAndTime>
        
      </TaskItemWrapper>
      <TouchableOpacity
          style={{ flex: 1 }}
          onPress={submitHandler}
          // taskStore.deleteTask(task.id)
          
        >
        
          {authStore.user?.id === task.userId ? (
            <FontAwesome5 name="trash" size={24} color="red" />
          ) : (
            <></>
          )}
          
        </TouchableOpacity>
    </List.Item>
  );
};

export default observer(TaskItem);
