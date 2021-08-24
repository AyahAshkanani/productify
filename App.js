import React from "react";
import "react-native-gesture-handler";

//components
import Toast from "react-native-toast-message";

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
  //to mute warnings for now :P
  console.disableYellowBox = true;
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Toast ref={(ref) => Toast.setRef(ref)} style={{ marginTop: 7 }} />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
