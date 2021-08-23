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
import { style } from "styled-system";

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
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ fontSize: 18 }}>Work Start:</Text>

        <WorkTime
          preferences={preferences}
          setPreferences={setPreferences}
          isStart={true}
        />

        <Text style={{ fontSize: 18 }}>Work End:</Text>
        <WorkTime
          preferences={preferences}
          setPreferences={setPreferences}
          isStart={false}
        />
      </View>
      <ScrollView>
        <View style={styles.box}>
          <TouchableOpacity>
            <CheckBox
              title="Sunday"
              checked={preferences.sunday}
              onPress={() => {
                toggleSunday();
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CheckBox
              title="Monday"
              checked={preferences.monday}
              onPress={() => {
                toggleMonday();
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CheckBox
              title="Tuesday"
              checked={preferences.tuesday}
              onPress={() => {
                toggleTuesday();
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
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
          </TouchableOpacity>
          <TouchableOpacity>
            <CheckBox
              title="Friday"
              checked={preferences.friday}
              onPress={() => {
                toggleFriday();
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CheckBox
              title="Saturday"
              checked={preferences.saturday}
              onPress={() => {
                toggleSaturday();
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.SavePreferencesButton}
        onPress={updatePreferences}
      >
        <Text style={styles.SavePreferencesButtonText}>Save</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  workbox: {
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
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

export default observer(WorkingWeekDays);
