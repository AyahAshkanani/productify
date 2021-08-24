import React, { useState } from "react";
import { observer } from "mobx-react";
import taskTodoStore from "../../stores/taskTodoStore";
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

const TaskTodoAdd = ({ task }) => {
  const [todo, setTodo] = useState({
    text: "",
    done: false,
  });

  const todoAddHandler = () => {
    taskTodoStore.taskTodoItemAdd(todo, task.id, task);
    setTodo({ text: "", done: false });
  };

  return (
    <>
      <View>
        <TextInput
          value={todo.text}
          style={styles.input}
          placeholder="add todo.."
          onChangeText={(text) => setTodo({ ...todo, text })}
        />
        <View style={styles.button}>
          <Button
            onPress={todoAddHandler}
            title="Add a todo"
            color="white"
          ></Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 5,
    width: 200,
    height: 30,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    backgroundColor: "#F194FF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default observer(TaskTodoAdd);

/* 

*/
