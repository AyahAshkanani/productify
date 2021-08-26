import React from "react";
// navigation
import { useNavigation } from "@react-navigation/native";

// React native
import { View, Text, TouchableOpacity } from "react-native";

// Icons
import { Ionicons } from "@expo/vector-icons";
//mobx
import { observer } from "mobx-react";
const UpdateButton = ({ oldTask }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("UpdateTask", { oldTask });
  };

  return (
    <>
      <View style={{ display: "flex", flexDirection: " row " }}>
        <TouchableOpacity
          style={{ backgroundColor: "rgba(52, 52, 52, 0)" , paddingHorizontal:20 }}
          onPress={handlePress}
        >
          <Text>
            <Ionicons name="settings-sharp" size={30} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default observer(UpdateButton);
