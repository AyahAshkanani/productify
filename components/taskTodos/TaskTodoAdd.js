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
  TouchableOpacity,
} from "react-native";
import { TodoButton, TodoButtonText } from "./styles";

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
    <View>
      <TextInput
        value={todo.text}
        style={styles.input}
        placeholder="write a todo.."
        onChangeText={(text) => setTodo({ ...todo, text })}
      />
      <View style={{ alignItems: "center" }}>
        <TodoButton onPress={todoAddHandler} style={{ width: 100 }}>
          <TodoButtonText>Add todo</TodoButtonText>
        </TodoButton>
      </View>
    </View>
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
    backgroundColor: "blue",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default observer(TaskTodoAdd);

/* 

*/
