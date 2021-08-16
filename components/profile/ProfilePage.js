import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//store
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

const ProfilePage = () => {
  //if (profileStore.loading) return <Spinner />;

  const [profile, setProfile] = useState(
    profileStore.profile || {
      days: "",
      hours: "",
    }
  );

  const updateProfile = () => {
    if (profile.days === "") setProfile({ ...profile, days: null });
    if (profile.hours === "") setProfile({ ...profile, hours: null });
    profileStore.ProfileUpdate(profile);
  };

  console.log(profileStore.profiles);
  console.log(profileStore.profile);
  return (
    <View style={styles.container}>
      {/* <Text>{authStore.user.username}</Text> */}
      <Text>Hello</Text>

      <TextInput
        autoFocus={true}
        value={profile.days}
        onChangeText={(days) => {
          setProfile({ ...profile, days });
        }}
        placeholder={"Add working days"}
        maxLength={30}
        style={[styles.input, { outline: "none" }]}
      />

      <TextInput
        autoFocus={true}
        value={profile.hours}
        onChangeText={(hours) => {
          setProfile({ ...profile, hours });
        }}
        placeholder={"Add working hours"}
        maxLength={30}
        style={[styles.input, { outline: "none" }]}
      />

      <TouchableOpacity
        style={styles.SaveProfileButton}
        onPress={updateProfile}
      >
        <Text style={styles.SaveProfileButtonText}>Save changes</Text>
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
  SaveProfileButton: {
    alignItems: "center",
    padding: 20,
    margin: 60,
    backgroundColor: "lightgray",
    marginTop: 30,
  },
  SaveProfileButtonText: {
    color: "black",
    fontSize: 18,
  },
});

export default observer(ProfilePage);
