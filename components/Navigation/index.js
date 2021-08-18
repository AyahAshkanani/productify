import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//stores
import authStore from "../../stores/authStore";

//components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskList from "../tasks/taskList";
import Home from "../Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

import AddTask from "../tasks/AddTask";
//import ProgressPage from "../progress/ProgressPage";

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProgressPage from "../progress/ProgressPage";

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs({ theme }) {
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
    </Stack.Navigator>
  );
}
