import React from "react";
//native-base
import { List } from "native-base";

//styled components
import { TaskItemName } from "./styles";
import { TaskItemWrapper } from "./styles";
//observer
import { observer } from "mobx-react";

//stores

//icons

const TaskItem = ({ task }) => {
  return (
    <List.Item>
      <TaskItemWrapper>
        <TaskItemName>{task.name}</TaskItemName>
        <TaskItemName>{task.endDate}</TaskItemName>
      </TaskItemWrapper>
    </List.Item>
  );
};

export default observer(TaskItem);
