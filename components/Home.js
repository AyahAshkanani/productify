import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import { HomeBackground, ButtonStyling } from "../styles";
import Logout from "./authentication/Logout";
const Home = () => {
  return (
    <>
      <HomeBackground>
        <Text>Productify</Text>
        <Logout />
      </HomeBackground>
    </>
  );
};
export default observer(Home);
