import React from "react";
import authStore from "../../stores/authStore";
import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
const Logout = () => {
  const navigation = useNavigation();

  handleSignout = async () => {
    await authStore.logout(navigation);
    navigation.navigate("Register");
  };

  return (
    <>
      {/* use this condition instead: */}
      {/* {CONDITION ?? <Button> ... </Button>} */}
      {authStore.user ? (
        <Button onPress={handleSignout} title="Logout">
          <Text>Logout</Text>
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default observer(Logout);
