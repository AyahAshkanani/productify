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
import Logout from "../authentication/Logout";

const TaskList = ({ navigation }) => {
  //{ navigation }
  if (taskStore.loading) return <Spinner />;

  let tasks = taskStore.tasks;
  const taskList = tasks.map((task) => (
    <TaskItem task={task} key={task.id} navigation={navigation} /> //navigation={navigation}
  ));

  return (
    <>
      <ScrollView>
        <Logout />
        <ListWrapper>
          <List>{taskList}</List>
        </ListWrapper>
      </ScrollView>
    </>
  );
};

export default observer(TaskList);
