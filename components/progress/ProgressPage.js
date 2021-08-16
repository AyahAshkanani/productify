import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { observer } from "mobx-react";
//import { Spinner } from "native-base";

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

  const updateProgress = () => {
    if (progress.days === "") setProgress({ ...progress, days: null });
    if (progress.hours === "") setProgress({ ...progress, hours: null });
    progressStore.ProgressUpdate(progress);
  };

  console.log(progressStore.progress);
  return (
    <View style={styles.container}>
      {/* <Text>{authStore.user.username}</Text> */}
      <TextInput
        autoFocus={true}
        value={progress.days}
        onChangeText={(days) => {
          setProgress({ ...progress, days });
        }}
        placeholder={"Add working days"}
        maxLength={30}
        style={[styles.input, { outline: "none" }]}
      />

      <TextInput
        autoFocus={true}
        value={progress.hours}
        onChangeText={(hours) => {
          setProgress({ ...progress, hours });
        }}
        placeholder={"Add working hours"}
        maxLength={30}
        style={[styles.input, { outline: "none" }]}
      />

      <TouchableOpacity
        style={styles.SaveProgressButton}
        onPress={updateProgress}
      >
        <Text style={styles.SaveProgressButtonText}>Save changes</Text>
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
    padding: 20,
    margin: 60,
    backgroundColor: "lightgray",
    marginTop: 30,
  },
  SaveProgressButtonText: {
    color: "black",
    fontSize: 18,
  },
});

export default observer(ProgressPage);
