/* Imports */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* Components */
import Home from "../Home";
import Login from "../authentication/Login";
/*State and Store */
import { observer } from "mobx-react-lite";


const Stack = createStackNavigator();
const RootNavigator = ({ theme }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.green,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
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

    </Stack.Navigator>
  );
};

export default observer(RootNavigator);
