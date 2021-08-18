import React from "react";
//observer
import { observer } from "mobx-react";
import { TaskDetailWrapper, TaskDetailsStyle } from "./styles";

const TaskDetail = ({ route }) => {
  const { task } = route.params;
  console.log(task); // remove console log
  return (
    <TaskDetailWrapper>
      <TaskDetailsStyle>{task.name}</TaskDetailsStyle>
    </TaskDetailWrapper>
  );
};

export default observer(TaskDetail);
