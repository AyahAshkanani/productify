import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import { HomeBackground, ButtonStyling } from "../styles";
import Signout from "./authentication/Signout";
const Home = () => {
  return (
    <>
      <HomeBackground>
        <Text>Productify</Text>
        <Signout />
      </HomeBackground>
    </>
  );
};
export default observer(Home);
