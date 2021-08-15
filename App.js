import React from "react";
import "react-native-gesture-handler";
const theme = {
  mainColor: "#222222",
  backgroundColor: "white",
  purple: "#c77dff",
  pink: "#ED3293",
  darkPink: "#a4133c",
  red: "red",
  white: "#fff",
  blue: "#90d4ed",
  black: "#000000",
};

// styles
import { ThemeProvider } from "styled-components";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import RootNavigator from "./components/Navigation/index";

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
