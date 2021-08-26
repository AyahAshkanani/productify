import React, { useState } from "react";
//react-native
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";

import { observer } from "mobx-react";
import WorkTime from "./WorkTime";

//store
import preferencesStore from "../../stores/preferencesStore";
import { PrefContainer, PrefContent } from "./styles";

const WorkingWeekDays = () => {
  const [preferences, setPreferences] = useState(
    preferencesStore.preferences || {
      timeStart: "",
      timeEnd: "",
    }
  );

  const toggleSunday = () => {
    setPreferences({ ...preferences, sunday: !preferences.sunday });
  };
  const toggleMonday = () => {
    setPreferences({ ...preferences, monday: !preferences.monday });
  };
  const toggleTuesday = () => {
    setPreferences({ ...preferences, tuesday: !preferences.tuesday });
  };
  const toggleWednesday = () => {
    setPreferences({ ...preferences, wednesday: !preferences.wednesday });
  };
  const toggleThursday = () => {
    setPreferences({ ...preferences, thursday: !preferences.thursday });
  };
  const toggleFriday = () => {
    setPreferences({ ...preferences, friday: !preferences.friday });
  };
  const toggleSaturday = () => {
    setPreferences({ ...preferences, saturday: !preferences.saturday });
  };

  const updatePreferences = () => {
    if (preferences.timeStart === "")
      setPreferences({ ...preferences, timeStart: null });
    if (preferences.timeEnd === "")
      setPreferences({ ...preferences, timeEnd: null });
    preferencesStore.PreferencesUpdate(preferences);
  };

  return (
    <PrefContainer style={{ borderTopWidth: 150 }}>
      <PrefContent>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={{ fontSize: 18, paddingTop: 7 }}>Work Start:</Text>

            <WorkTime
              preferences={preferences}
              setPreferences={setPreferences}
              isStart={true}
            />
          </View>
          <View style={styles.box}>
            <Text style={{ fontSize: 18, paddingTop: 7 }}>Work End:</Text>
            <WorkTime
              preferences={preferences}
              setPreferences={setPreferences}
              isStart={false}
            />
          </View>

          <ScrollView>
            <Text style={{ margin: 10, fontSize: 20 }}> Working Days</Text>
            <View style={styles.workcontainer}>
              <View style={styles.workbox}>
                <TouchableOpacity>
                  <CheckBox
                    title="Sunday"
                    checked={preferences.sunday}
                    onPress={() => {
                      toggleSunday();
                    }}
                  />
                  <CheckBox
                    title="Monday"
                    checked={preferences.monday}
                    onPress={() => {
                      toggleMonday();
                    }}
                  />
                  <CheckBox
                    title="Tuesday"
                    checked={preferences.tuesday}
                    onPress={() => {
                      toggleTuesday();
                    }}
                  />
                  <CheckBox
                    title="Wednesday"
                    checked={preferences.wednesday}
                    onPress={() => {
                      toggleWednesday();
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <CheckBox
                    title="Thursday"
                    checked={preferences.thursday}
                    onPress={() => {
                      toggleThursday();
                    }}
                  />
                  <CheckBox
                    title="Friday"
                    checked={preferences.friday}
                    onPress={() => {
                      toggleFriday();
                    }}
                  />
                  <CheckBox
                    title="Saturday"
                    checked={preferences.saturday}
                    onPress={() => {
                      toggleSaturday();
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={styles.SavePreferencesButton}
            onPress={updatePreferences}
          >
            <Text style={styles.SavePreferencesButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </PrefContent>
    </PrefContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  box: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#2B303A",
    borderRadius: 15,
    padding: 10,
    margin: 10,
    flexDirection: "row",
  },
  workcontainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
  },

  workbox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#2B303A",
    borderRadius: 25,
    paddingTop: 10,
    paddingBottom: 5,
  },
  SavePreferencesButton: {
    alignItems: "center",
    padding: 10,
    margin: 30,
    backgroundColor: "#D00000",
    borderRadius: 25,
    paddingLeft: 55,
    paddingRight: 55,
  },
  SavePreferencesButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default observer(WorkingWeekDays);
