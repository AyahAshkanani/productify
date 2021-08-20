import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const WorkTime = ({ preferences, setPreferences, isStart }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    const timeFormat = date.getHours() + ":" + date.getMinutes();
    isStart
      ? setPreferences({ ...preferences, timeStart: timeFormat })
      : setPreferences({ ...preferences, timeEnd: timeFormat });
    setShow(Platform.OS === "ios");
  };

  const showTimepicker = () => {
    setShow(true);
  };

  return (
    <View style={{ justifyContent: "center" }}>
      <View>
        <Button onPress={showTimepicker} title="Pick time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
          minuteInterval={15}
        />
      )}
    </View>
  );
};
export default WorkTime;
