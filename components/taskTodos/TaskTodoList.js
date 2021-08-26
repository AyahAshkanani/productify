import React, { useState } from "react";

//react-native
import { ScrollView, View } from "react-native";

//native-base
import { List, Spinner } from "native-base";

//components
import TaskTodoItem from "./TaskTodoItem";

//styles
import { ListWrapper, NoTasksText, TodaysTasksText } from "./styles";

//observer
import { observer } from "mobx-react";

const TaskTodoList = ({ task }) => {
  console.log(task);
  const taskTodoItemsList = task.taskTodoItems?.map((todo) => (
    <TaskTodoItem todo={todo} key={todo.id} task={task} />
  ));

  return (
    <>
      <ScrollView>
        {taskTodoItemsList?.length > 0 ? (
          <>
            <TodaysTasksText>Task's Checklist:</TodaysTasksText>
            <ScrollView>
            <ListWrapper style={{padding:-500, paddingHorizontal:20}}>
              <View style={{padding:-200}} >{taskTodoItemsList}</View>
            </ListWrapper>
            </ScrollView>
          </>
        ) : (
          <NoTasksText>No checklist items for this task</NoTasksText>
        )}
      </ScrollView>
    </>
  );
};

export default observer(TaskTodoList);
