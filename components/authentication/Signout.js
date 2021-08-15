import React from "react";
import authStore from "../../stores/authStore";
import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
const Signout = () => {
  const navigation = useNavigation();
  handleSignout = async () => {
    await authStore.signout(navigation);
    navigation.navigate("Signup");
  };
  return (
    <>
      {authStore.user ? (
        <Button onPress={handleSignout} title="Signout">
          <Text>Signout</Text>
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default observer(Signout);
