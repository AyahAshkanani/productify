// why its outside of the components folder?😭
import React, { useState } from "react";

// components
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//DatePicker
import DatePicker from "react-native-datepicker";

const DatePick = ({ setTask, task }) => {
  const [date, setDate] = useState();
  const [date2, setDate2] = useState();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Start Date</Text>

          <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select start date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            minDate={new Date()} //user cannot pick a start date before present day
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                marginTop: 2,
              },
            }}
            onDateChange={(date) => {
              setTask({ ...task, startDate: date, endDate: date });
              setDate(date);
              setDate2(date);
            }}
          />
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>End Date</Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={date2} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select end date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            minDate={new Date()} //user cannot pick a start date before present day
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                marginBottom: 7,
              },
            }}
            onDateChange={(date2) => {
              setTask({ ...task, endDate: date2 });
              setDate2(date2);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DatePick;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 15,
    paddingLeft: 70,
    padding: 20,
    // marginEnd:20,
  },
  datePickerStyle: {
    width: 200,
    // paddingTop:5,
    // paddingBottom:16,
  },
});
