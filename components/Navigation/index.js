import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//stores
import authStore from "../../stores/authStore"; // remove unused import

//components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskList from "../tasks/taskList";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import TaskDetail from "../tasks/TaskDetail";
import AddTask from "../tasks/AddTask";
//import ProgressPage from "../progress/ProgressPage"; // remove unused import

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons"; // remove unused import
import ProgressPage from "../progress/ProgressPage";

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// give it a better name that makes it clear what this component is
// I don't think this is the tab navigator
// I think Main below is the tab navigator.
// so fix naming please.
export default function MyTabs({ theme }) {
  // this Main here should be moved as a component in another file inside the Navigation folder
  // then imported and used here
  // also give it a more meaningful descriptive name. What's Main? The name should tell me exactly what it is.
  function Main() {
    return (
      //bottom tab bar
      <Tab.Navigator
        tabBarOptions={{
          screenOptions: {
            activeTintColor: "blue",
          },
          showLabel: false,
          style: {
            backgroundColor: "transparent",
            borderTopWidth: 0,
            position: "absolute",
            left: 50,
            right: 50,
            bottom: 20,
            height: 100,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={TaskList}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddTask}
          options={{
            tabBarLabel: "Add Task",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={30} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="ProgressPage"
          component={ProgressPage}
          options={{
            tabBarLabel: "Preferences",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-settings-outline" size={30} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    //screen navigations
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#c77dff",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProgressPage"
        component={ProgressPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TaskDetail"
        component={TaskDetail}
        options={({ route }) => {
          const { task } = route.params;

          return {
            title: task.name,
          };
        }}
      />
    </Stack.Navigator>
  );
}
