import React, { useState } from "react";
import "react-native-gesture-handler";
import { observer } from "mobx-react";

//components
import Toast from "react-native-toast-message";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./components/Navigation/index";

// styles
import { ThemeProvider } from "styled-components";

//themes
const theme = {
  red: {
    mainColor: "#FF364D",
    backgroundColor: "#FCEEEA",
    secondaryColor: "#837B7C",
    mainTextColor: "#292D50",
    secondaryTextColor: "#FFFFFF",
    complementaryOne: "#00E4F4",
    complementaryTwo: "#0EDAAD",
    white: "white",
  },
  blue: {
    mainColor: "#12D2FA",
    backgroundColor: "#EEF4F5",
    secondaryColor: "#837B7C",
    mainTextColor: "#292D50",
    secondaryTextColor: "#FFFFFF",
    complementaryOne: "#EA564F",
    complementaryTwo: "#FA9112",
    white: "white",
  },
  purple: {
    mainColor: "#7A55F5",
    backgroundColor: "#F5F2FF",
    secondaryColor: "#837B7C",
    mainTextColor: "#292D50",
    secondaryTextColor: "#FFFFFF",
    complementaryOne: "#F5E055",
    complementaryTwo: "#F58F55",
    white: "white",
  },
  green: {
    mainColor: "#14D79F",
    backgroundColor: "#E2FFF6",
    secondaryColor: "#837B7C",
    mainTextColor: "#292D50",
    secondaryTextColor: "#FFFFFF",
    complementaryOne: "#D71431",
    complementaryTwo: "#D76914",
    white: "white",
  },
};

function App() {
  //to mute warnings for now :P
  console.disableYellowBox = true;
  const [currentTheme, setCurrentTheme] = useState("red");
  const changeTheme = (themeColor) => {
    setCurrentTheme(themeColor);
  };
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme[currentTheme]}>
        <NavigationContainer>
          <RootNavigator
            theme={theme[currentTheme]}
            changeTheme={changeTheme}
            currentTheme={currentTheme}
          />
        </NavigationContainer>
        <Toast ref={(ref) => Toast.setRef(ref)} style={{ marginTop: 5 }} />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export default observer(App);
