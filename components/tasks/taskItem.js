import React from "react";
//native-base
import { List } from "native-base";

//styled components
import { TaskItemWrapper, TaskItemDateAndTime, TaskItemName } from "./styles";

//observer
import { observer } from "mobx-react";

//stores

//icons

const TaskItem = ({ task }) => {
  return (
    <List.Item>
      <TaskItemWrapper>
        <TaskItemName>{task.name}</TaskItemName>
        <TaskItemDateAndTime>{task.endDate}</TaskItemDateAndTime>
      </TaskItemWrapper>
    </List.Item>
  );
};

export default observer(TaskItem);
