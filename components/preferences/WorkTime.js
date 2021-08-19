import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const WorkTime = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //console.log(selectedDate);
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  return (
    <View style={{ justifyContent: "center" }}>
      <View>
        <Button onPress={showTimepicker} title="Pick work start time:" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View>
        <Button onPress={showTimepicker} title="Pick work end time:" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default WorkTime;
