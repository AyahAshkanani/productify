import React, { useState } from "react";

//react-native
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

//native-base
import { List, Spinner } from "native-base";
//stores
import taskNoteStore from "../../stores/taskNoteStore";

//styles
import { ListWrapper, NoTasksText, TodaysTasksText } from "./styles";

//observer
import { observer } from "mobx-react";
import { style } from "styled-system";

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
              <Text style={styles.noteText}>{task.taskNote.text}</Text>
            </View>
            <TouchableOpacity onPress={deleteHandler}>
              <View>
                <Text style={styles.clearNote}>
                  clear note
                  <MaterialIcons
                    title="clear"
                    name="clear"
                    size={18}
                    color="red"
                  />
                </Text>
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

const styles = StyleSheet.create({
  clearNote: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 50,
    fontSize: 15,
    color: "gray",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  noteText: {
    backgroundColor: "#fff3b0",
    padding: 10,
    paddingHorizontal: 20,
  },
});

export default observer(TaskNoteItem);
