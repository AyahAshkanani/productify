import React from "react";

//react-native
import { ScrollView } from "react-native";

//native-base
import { List, Spinner } from "native-base";

//components
import TaskItem from "./taskItem";

//styles
import { ListWrapper } from "./styles";

//stores
import taskStore from "../../stores/taskStore";

//observer
import { observer } from "mobx-react";

const TaskList = () => {
  //{ navigation }
  if (taskStore.loading) return <Spinner />;

  let tasks = taskStore.tasks;
  const taskList = tasks.map((task) => (
    <TaskItem task={task} key={task.id} /> //navigation={navigation}
  ));

  return (
    <>
      <ScrollView>
        <ListWrapper>
          <List>{taskList}</List>
        </ListWrapper>
      </ScrollView>
    </>
  );
};

export default observer(TaskList);
