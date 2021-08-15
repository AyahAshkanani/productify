import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//stores

//components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskList from "../tasks/taskList";

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
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
          component={TaskList}
          options={{
            tabBarLabel: "Add Trip",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={30} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="Preferences"
          component={TaskList}
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
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
