import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//stores
import authStore from "../../stores/authStore";

//components
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskList from "../tasks/taskList";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PreferencesPage from "../preferences/PreferencesPage";
import TaskDetail from "../tasks/TaskDetail";
import AddTask from "../tasks/AddTask";
import ProgressChart from "../tasks/ProgressChart";
import ChangeThemePage from "../preferences/ChangeThemePage";
//import ProgressPage from "../progress/ProgressPage";
import UpdateTask from "../tasks/UpdateTask";

//icons
import { Ionicons } from "@expo/vector-icons";

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs({ theme, changeTheme, currentTheme }) {
  function Main() {
    return (
      //bottom tab bar
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          // activeBackgroundColor: theme.backgroundColor,
          // inactiveBackgroundColor: theme.backgroundColor,
        }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.backgroundColor,
            borderColor: "transparent",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={TaskList}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={30}
                color={focused ? theme.complementaryTwo : theme.secondaryColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddTask}
          options={{
            tabBarLabel: "Add Task",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name="add-circle-sharp"
                size={80}
                color={focused ? "transparent" : theme.complementaryOne}
                style={{ marginTop: -30 }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="PreferencesPage"
          //component={PreferencesPage}
          options={{
            tabBarLabel: "Preferences",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "md-settings" : "md-settings-outline"}
                size={30}
                color={focused ? theme.complementaryTwo : theme.secondaryColor}
              />
            ),
          }}
        >
          {(props) => (
            <PreferencesPage
              changeTheme={changeTheme}
              currentTheme={currentTheme}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
  return (
    //screen navigations
    <Stack.Navigator
      initialRouteName="Main"
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#c77dff",
      //   },
      //   headerTintColor: "white",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   },
      // }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
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
        name="PreferencesPage"
        component={PreferencesPage}
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
      <Stack.Screen
        name="UpdateTask"
        component={UpdateTask}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProgressChart"
        component={ProgressChart}
        options={{
          title: "Progress",
        }}
      />
      <Stack.Screen
        name="ChangeThemePage"
        component={() => (
          <ChangeThemePage
            changeTheme={changeTheme}
            currentTheme={currentTheme}
          />
        )}
        options={{
          title: "Change Theme",
        }}
      />
    </Stack.Navigator>
  );
}
