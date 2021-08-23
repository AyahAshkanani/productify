import React, { useState } from "react";

//react-native
import { ScrollView, View } from "react-native";

//native-base
import { List, Spinner } from "native-base";

//styles
import { ListWrapper, NoTasksText, TodaysTasksText } from "./styles";

//observer
import { observer } from "mobx-react";

const TaskNoteItem = ({ task }) => {
  // console.log(taskNote);
  return (
    <>
      <ScrollView>
        {/* {task.length > 0 ? (
          <> */}
        <TodaysTasksText>Task's Note</TodaysTasksText>
        <View>
          <List>{task.taskNote}</List>
        </View>
        {/* </>
        ) : (
          <NoTasksText>No note for this task</NoTasksText>
        )} */}
      </ScrollView>
    </>
  );
};

export default observer(TaskNoteItem);
