import React from "react";

//useState
import { useState } from "react";

//native-base
import { List } from "native-base";

//styled components
import { TaskItemWrapper, TaskItemDateAndTime, TaskItemName } from "./styles";

//libs
import BouncyCheckbox from "react-native-bouncy-checkbox";

//observer
import { observer } from "mobx-react";

//stores
import taskStore from "../../stores/taskStore";

const TaskItem = ({ task }) => {
  const [done, markTask] = useState(task.done);
  const toggleTask = async () => {
    await taskStore.markTask(task);
    markTask(!done);
  };
  return (
    <List.Item>
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
        <TaskItemDateAndTime>{task.endDate}</TaskItemDateAndTime>
      </TaskItemWrapper>
    </List.Item>
  );
};

export default observer(TaskItem);
