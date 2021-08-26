import React, { useState, useEffect } from "react";
// import Quote from "react-native-quote-generator";
//react-native
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Button,
} from "react-native";

import NumericInput from "react-native-numeric-input";
import { CheckBox } from "react-native-elements";

// mobx
import { useNavigation } from "@react-navigation/native";

import { observer } from "mobx-react";

import WorkingWeekDays from "./WorkingWeekDays";
//store
import authStore from "../../stores/authStore";

import preferencesStore from "../../stores/preferencesStore";
import ProgressChart from "../tasks/ProgressChart";
import WorkTime from "./WorkTime";

//components
import DropDownPicker from "react-native-dropdown-picker";

//icons
import { Ionicons } from "@expo/vector-icons";

const PreferencesPage = ({ changeTheme, currentTheme }) => {
  //theme picking
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentTheme);
  const [items, setItems] = useState([
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Purple", value: "purple" },
    { label: "Green", value: "green" },
  ]);

  const navigation = useNavigation();
  const [greet, setGreet] = useState("");
  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 18) return setGreet("Afternoon");
    setGreet("Evening");
  };
  useEffect(() => {
    findGreet();
  }, []);
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
      <Text
        style={styles.header}
      >{`Good ${greet} ${authStore.user.username}`}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChangeThemePage", changeTheme, currentTheme)
        }
        style={{
          backgroundColor: "rgba(52, 52, 52, 0)",
          alignSelf: "flex-end",
          marginTop: -20,
        }}
      >
        <Ionicons name="color-palette-sharp" size={24} color="black" />
      </TouchableOpacity>
      {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={changeTheme}
        setItems={setItems}
        style={{ width: 150 }}
      /> */}
      {/* <Text>User name: {authStore.user.username}</Text> */}

      {/* //       <View> */}
      {/* //         <Quote /> */}
      {/* //       </View> */}

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

      <WorkingWeekDays />

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProgressChart")}
          title="Progress Page"
          style={{
            alignSelf: "flex-end",
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          <Ionicons name="arrow-redo-outline" size={40} color="black" />
          <Text>Progress Page</Text>
        </TouchableOpacity>
      </View>
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
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});

export default observer(PreferencesPage);
