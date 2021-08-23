import React from "react";
import "react-native-gesture-handler";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./components/Navigation/index";

// styles
import { ThemeProvider } from "styled-components";
const theme = {
  mainColor: "#DE3E50",
  backgroundColor: "#F8E5E0",
  secondaryColor: "#837B7C",
  mainTextColor: "#292D50",
  secondaryTextColor: "#FFFFFF",
  complementaryOne: "#0ACEDC",
  complementaryTwo: "#3EDEBB",
  white: "white",
};

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
