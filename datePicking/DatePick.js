import React, { useState } from "react";

// components
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//DatePicker
import DatePicker from "react-native-datepicker";
import { observer } from "mobx-react";
const DatePick = ({ setTask, task }) => {
  const [date, setDate] = useState();
  const [date2, setDate2] = useState();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Start Date</Text>

          <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select start date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                // display: "none",
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
              setTask({ ...task, startDate: date });
              setDate(date);
            }}
          />
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.container2}>
        <View style={styles.container2}>
          <Text>End Date</Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={date2} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select end date"
            minDate={new Date()} //user cannot pick a start date before present day
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
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
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  container2: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
