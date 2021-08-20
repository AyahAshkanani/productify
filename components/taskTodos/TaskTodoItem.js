import React from "react";

//styled components
import { TaskItemName } from "./styles";
import { View } from "react-native";

//observer
import { observer } from "mobx-react";

//stores
import taskStore from "../../stores/taskStore";
import authStore from "../../stores/authStore";

const TaskTodoItem = ({ todo }) => {
  return (
    <View>
      <TaskItemName>
        {" "}
        {todo.id}- {todo.text}
      </TaskItemName>
    </View>
  );
};

export default observer(TaskTodoItem);
