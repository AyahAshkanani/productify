import React, { useState } from "react";

import { View, StyleSheet, Text } from "react-native";

//stores
import progressStore from "../../stores/progressStore";
import taskStore from "../../stores/taskStore";
import Quote from "react-native-quote-generator";
//observer
import { observer } from "mobx-react";
import moment from "moment";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
} from "victory-native";

import {ProgressPage} from "./styles";

const ProgressChart = () => {
  const progressList = progressStore.progresses.map((progress) =>
    taskStore.getTaskById(progress?.taskId)
  );

  function ChangeDateToDayNumber(date) {
    const day = new Date(date);

    return day.getDay();
  }
  console.log(progressList);
  function totalHours(dayNumber) {
    let total = 0;

    progressList.forEach((progress) => {
      if (+dayNumber === +ChangeDateToDayNumber(progress?.endDate))
        total = total + progress.hours;

      setProgressHours();
    });

    return total;
  }
  function setProgressHours(dayNumber) {
    return progressList.find((progress) => {
      if (progress?.endDate) {
        return ChangeDateToDayNumber(progress?.endDate) === dayNumber;
      } else {
        return ChangeDateToDayNumber(progress?.startDate) === dayNumber;
      }
    })
      ? progressList.find((progress) => {
          const Day = new Date(progress?.endDate);

          if (progress?.endDate) {
            return Day.getDay() === dayNumber;
          } else {
            return Day.getDay() === dayNumber;
          }
        }).hours
      : 0;
  }

  const data = [
    { Week: "Sun", Hours: totalHours(0) },
    { Week: "Mon", Hours: totalHours(1) },
    { Week: "Tue", Hours: totalHours(2) },
    { Week: "Wed", Hours: totalHours(3) },
    { Week: "Thur", Hours: totalHours(4) },
    { Week: "Fri", Hours: totalHours(5) },
    { Week: "Sat", Hours: totalHours(6) },
  ];

  return (
    <View style={styles.container}>
      <ProgressPage>Get motivated</ProgressPage>
      <View style={styles.quote}><Quote /></View>
      
      <ProgressPage>Weekly Progress</ProgressPage>

      
      <VictoryChart width={420} height={480} palette="Soft">
        <VictoryAxis label="Week" />
        <VictoryAxis dependentAxis label="Hours" />
        <VictoryGroup offset={20} /> 
        <VictoryBar data={data} x="Week" y="Hours" />
      </VictoryChart>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0efeb",
    color: "#333",
  },

  quote:{
    // alignItems: "center",
    justifyContent:"center",
    marginLeft:20,
    marginRight:20,
    padding:10,
    borderColor:"#2b2d42",
    borderWidth: 2.5,
    borderRadius:4,
  },
});

export default observer(ProgressChart);
