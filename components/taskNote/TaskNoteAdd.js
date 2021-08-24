import React, { useState } from "react";
import { observer } from "mobx-react";
import taskNoteStore from "../../stores/taskNoteStore";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Modal,
  Text,
  Pressable,
} from "react-native";

const TaskNoteAdd = ({ task }) => {
  const [note, setNote] = useState({
    text: "",
  });

  const noteAddHandler = () => {
    taskNoteStore.taskNoteAdd(note, task.id, task);
    setNote({ text: "" });
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              value={note.text}
              multiline
              placeholder="Add a note..."
              style={[styles.input, styles.desc]}
              onChangeText={(text) => setNote({ ...note, text })}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                noteAddHandler();
              }}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add note</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default observer(TaskNoteAdd);
/*
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
*/
