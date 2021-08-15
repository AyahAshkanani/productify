
import React from "react";

import { NativeBaseProvider } from "native-base";

//styles
import { ThemeProvider } from "styled-components";
import { Text } from "react-native";

//navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation/index";

const theme = {
  mainColor: "#000000",
  backgroundColor: "#ffffff",
  pink: "#f283a2",
  red: "red",
  green: "#00af87",
};
export default function App() {
  
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator theme={theme} />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

