import React, { useState } from "react";

//react-native
import { ScrollView } from "react-native";

//native-base
import { List, Spinner } from "native-base";

//components
import TaskTodoItem from "./TaskTodoItem";

//styles
import { ListWrapper, NoTasksText, TodaysTasksText } from "./styles";

//stores
import taskStore from "../../stores/taskStore";

//observer
import { observer } from "mobx-react";

const TaskTodoList = ({ task }) => {
  //if (taskStore.loading) return <Spinner />;
  //let tasks = taskStore.tasks;

  const taskTodoItemsList = task.taskTodoItems.map((todo) => (
    <TaskTodoItem todo={todo} key={todo.id} />
  ));
  console.log(taskTodoItemsList);

  return (
    <>
      <ScrollView>
        {taskTodoItemsList.length > 0 ? (
          <>
            <TodaysTasksText>Task's todo items</TodaysTasksText>
            <ListWrapper>
              <List>{taskTodoItemsList}</List>
            </ListWrapper>
          </>
        ) : (
          <NoTasksText>No todo items for this task</NoTasksText>
        )}
      </ScrollView>
    </>
  );
};

export default observer(TaskTodoList);
