//remove all the unused imports
import React, { useState } from "react";

//react-native
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

//native-base
import { List, Spinner } from "native-base";
//stores
import taskNoteStore from "../../stores/taskNoteStore";

//styles
import { ListWrapper, NoTasksText, TodaysTasksText } from "./styles";

//observer
import { observer } from "mobx-react";

const TaskNoteItem = ({ task }) => {
  const deleteHandler = async () => {
    await taskNoteStore.taskNoteDelete(task.id, task, task.taskNote.id);
  };

  return (
    <>
      <ScrollView>
        {task.taskNote ? (
          <>
            <TodaysTasksText>Task's Note</TodaysTasksText>
            <View>
              <Text>{task.taskNote.text}</Text>
            </View>
            <TouchableOpacity onPress={deleteHandler}>
              <View>
                <MaterialIcons name="delete" size={18} color="#333" />
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <NoTasksText>No note for this task</NoTasksText>
        )}
      </ScrollView>
    </>
  );
};

export default observer(TaskNoteItem);
