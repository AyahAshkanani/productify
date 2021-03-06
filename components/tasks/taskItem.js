import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

//useState
import { useState } from "react";

//native-base
import { List } from "native-base";

//styled components
import {
  TaskItemWrapper,
  TaskItemDateAndTime,
  TaskItemName,
  TaskTag,
} from "./styles";
import { TouchableOpacity, Alert } from "react-native";

//libs
import BouncyCheckbox from "react-native-bouncy-checkbox";

//observer
import { observer } from "mobx-react";

//stores
import taskStore from "../../stores/taskStore";
import authStore from "../../stores/authStore";
import progressStore from "../../stores/progressStore";
import moment from "moment";

const TaskItem = ({ task, navigation }) => {
  const [done, markTask] = useState(task.done);

  const toggleTask = async () => {
    await taskStore.markTask(task);
    markTask(!done);

    const newProgress = { taskId: task.id, hours: task.hours };
    progressStore.addToProgress(newProgress); //if (task.done)
  };

  return (
    <List.Item
      onPress={() => navigation.navigate("TaskDetail", { task: task })}
    >
      <TaskItemWrapper>
        <TaskTag>{task.tag}</TaskTag>
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

        <TaskItemDateAndTime>
          {task.time} - {+task.time.slice(0, 2) + +task.hours}:00
        </TaskItemDateAndTime>
      </TaskItemWrapper>
    </List.Item>
  );
};

export default observer(TaskItem);
