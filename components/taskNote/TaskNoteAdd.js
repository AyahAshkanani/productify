import React, { useState } from "react";
import { observer } from "mobx-react";
import taskNoteStore from "../../stores/taskNoteStore";
import { View, StyleSheet, TextInput, Button } from "react-native";

const TaskNoteAdd = ({ task }) => {
  const [note, setNote] = useState({
    text: "",
  });

  const noteAddHandler = () => {
    taskNoteStore.taskNoteAdd(note, task.id, task);
    setNote({ text: "" });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={note.text}
        multiline
        placeholder="Add a note..."
        style={[styles.input, styles.desc]}
        onChangeText={(text) => setNote({ ...note, text })}
      />
      <Button onPress={noteAddHandler} title="Add" color="#DE3E50"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    fontSize: 20,
    color: "black",
  },
  desc: {
    height: 100,
  },
});

export default observer(TaskNoteAdd);
