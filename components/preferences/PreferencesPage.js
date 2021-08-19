import React, { useState } from "react";
//react-native
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NumericInput from "react-native-numeric-input";
import { CheckBox } from "react-native-elements";

import { observer } from "mobx-react";
import WorkTime from "./WorkTime";

//store
import authStore from "../../stores/authStore";
import preferencesStore from "../../stores/preferencesStore";
import ProgressChart from "./progressChart";

const PreferencesPage = () => {
  const [preferences, setPreferences] = useState(
    preferencesStore.preferences || {
      timeStart: "",
      timeEnd: "",
    }
  );

  const [number, onChangeNumber] = useState(0);

  const [sunday, setSunday] = useState(preferences.sunday);

  const toggleSunday = async () => {
    setSunday(!sunday);
    setPreferences({ ...preferences, sunday });
  };

  const updatePreferences = () => {
    if (preferences.timeStart === "")
      setPreferences({ ...preferences, timeStart: null });
    if (preferences.timeEnd === "")
      setPreferences({ ...preferences, timeEnd: null });
    preferencesStore.PreferencesUpdate(preferences);
  };

  return (
    <View style={styles.container}>
      <Text>User name: {authStore.user.username}</Text>

      {/* <View style={styles.box}>
        <Text style={styles.text}>Add start time</Text>
        <NumericInput
          value={number}
          minValue={0}
          onChange={(timeStart) => {
            setPreferences({ ...preferences, timeStart });
          }}
          totalWidth={100}
          totalHeight={40}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#3d5a80"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="#DE3E50"
          leftButtonBackgroundColor="#837B7C"
        />
      </View> */}

      <WorkTime />

      <TouchableOpacity
        onPress={() => {
          toggleSunday();
        }}
      >
        <CheckBox title="Sunday" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.SavePreferencesButton}
        onPress={updatePreferences}
      >
        <Text style={styles.SavePreferencesButtonText}>Save</Text>
      </TouchableOpacity>
      {/* <ProgressChart /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  text: {
    height: 40,
    margin: 20,
    borderWidth: 0.5,
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
  SavePreferencesButton: {
    alignItems: "center",
    padding: 10,
    margin: 20,
    backgroundColor: "#DE3E50",
    marginTop: 10,
    borderRadius: 10,
  },
  SavePreferencesButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default observer(PreferencesPage);
