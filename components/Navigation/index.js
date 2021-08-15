import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
// import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
//import ProfilePage from "../profile/ProfilePage";

const Stack = createStackNavigator();
export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
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
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};
