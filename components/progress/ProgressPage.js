import React, { useState } from "react";
//react-native
import {
  SafeAreaView, // remove unused import
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput, // remove unused import
} from "react-native";
import NumericInput from "react-native-numeric-input";

import { observer } from "mobx-react";
//import { Spinner } from "native-base"; // remove unused import

//store
import authStore from "../../stores/authStore";
import progressStore from "../../stores/progressStore";

const ProgressPage = () => {
  const [progress, setProgress] = useState(
    progressStore.progress || {
      days: "",
      hours: "",
    }
  );

  const [number, onChangeNumber] = useState(0);

  const updateProgress = () => {
    if (progress.days === "") setProgress({ ...progress, days: null });
    if (progress.hours === "") setProgress({ ...progress, hours: null });
    progressStore.ProgressUpdate(progress);
  };

  return (
    <View style={styles.container}>
      <Text>User name: {authStore.user.username}</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Add working days</Text>
        <NumericInput
          value={number}
          minValue={0}
          onChange={(days) => {
            setProgress({ ...progress, days });
          }}
          totalWidth={100}
          totalHeight={40}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#3d5a80"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="#3d5a80"
          leftButtonBackgroundColor="#98c1d9"
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Add working hours</Text>
        <NumericInput
          value={number}
          minValue={0}
          onChange={(hours) => {
            setProgress({ ...progress, hours });
          }}
          totalWidth={100}
          totalHeight={40}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#3d5a80"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="#3d5a80"
          leftButtonBackgroundColor="#98c1d9"
        />
      </View>
      <TouchableOpacity
        style={styles.SaveProgressButton}
        onPress={updateProgress}
      >
        <Text style={styles.SaveProgressButtonText}>Save</Text>
      </TouchableOpacity>
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
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "transparent",
    fontSize: 20,
  },
  SaveProgressButton: {
    alignItems: "center",
    padding: 10,
    margin: 20,
    backgroundColor: "#98c1d9",
    marginTop: 10,
    borderRadius: 10,
  },
  SaveProgressButtonText: {
    color: "black",
    fontSize: 18,
  },
});

export default observer(ProgressPage);
