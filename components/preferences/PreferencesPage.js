import React from "react";
//react-native
import { StyleSheet, Text, View } from "react-native";

import { observer } from "mobx-react";

//store
import authStore from "../../stores/authStore";
//import ProgressChart from "./progressChart";
import WorkingWeekDays from "./WorkingWeekDays";

const PreferencesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 25 ,fontSize: 20}}>username: {authStore.user.username}</Text>

      <WorkingWeekDays />

      {/* <ProgressChart /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    // justifyContent: "center",
  },
});

export default observer(PreferencesPage);
