import React, { useState } from "react";

//styled components
import { TaskItemName } from "./styles";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//observer
import { observer } from "mobx-react";
//import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
//stores
import taskTodoStore from "../../stores/taskTodoStore";

const TaskTodoItem = ({ todo, task }) => {
  const [done, markDone] = useState(todo.done);

  const toggleTaskTodoItem = async () => {
    await taskTodoStore.markTaskTodoItem(task.id, todo, todo.id);
    markDone(!done);
  };

  const deleteHandler = async () => {
    await taskTodoStore.taskTodoItemDelete(task.id, task, todo.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => {
          toggleTaskTodoItem();
        }}
      >
        <Text style={{ color: "#aaa" }}>{done ? "✔" : ""}</Text>
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          {
            color: done ? "#aaa" : "black",
            textDecorationLine: done ? "line-through" : "none",
          },
        ]}
      >
        {todo.text}
      </Text>

      <TouchableOpacity onPress={deleteHandler}>
        <View>
          <MaterialIcons name="delete" size={18} color="#333" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  container2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  checkbox: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: "#fff0",
    color: "black",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 3,
    fontSize: 16,
    paddingRight: 20,
  },
});

export default observer(TaskTodoItem);

/*
  <TaskItemName>
        <TouchableOpacity>
          <CheckBox
            title={todo.text}
            checked={done}
            onPress={() => {
              toggleTaskTodoItem();
            }}
          />
        </TouchableOpacity>{" "}
        <TouchableOpacity onPress={deleteHandler}>
          <View>
            <MaterialIcons name="delete" size={18} color="#333" />
          </View>
        </TouchableOpacity>
      </TaskItemName>
*/
