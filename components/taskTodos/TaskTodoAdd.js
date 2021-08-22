import React, { useState } from "react";
import { observer } from "mobx-react";
import taskTodoStore from "../../stores/taskTodoStore";
import { View, StyleSheet, TextInput, Button } from "react-native";

const TaskTodoAdd = ({ task }) => {
  const [todo, setTodo] = useState({
    text: "",
    done: false,
  });

  const todoAddHandler = () => {
    taskTodoStore.taskTodoItemAdd(todo, task.id);
    setTodo({ text: "", done: false });
  };

  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          placeholder="add todo.."
          onChangeText={(text) => setTodo({ ...todo, text })}
        />
        <Button
          onPress={todoAddHandler}
          title="Add Todo"
          color="#DE3E50"
        ></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    width: 200,
    height: 30,
  },
});

export default observer(TaskTodoAdd);

/* 
const [temp, setTemp] = useState("");
  const todoAddHandler = async () => {
    setTodo({ text: temp });
    await taskTodoStore.taskTodoItemAdd(todo, task.id);
    setTemp("");
    console.log(temp);
  };

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          placeholder="add todo.."
          onChangeText={(text) => setTemp(text)}
          //onChangeText={(text) => console.log(text)}
        />
        <Button
          onPress={todoAddHandler}
          title="Add Todo"
          color="#DE3E50"
        ></Button>
      </View>
    </>
  );
};
*/
