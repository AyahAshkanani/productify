import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { Spinner } from "react";

//store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

const ProfilePage = () => {
  // if (profileStore.loading) return <Spinner />;

  console.log(profileStore.profiles);
  return (
    <View style={styles.container}>
      {/* <Text>{authStore.user.username}</Text> */}
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default observer(ProfilePage);
