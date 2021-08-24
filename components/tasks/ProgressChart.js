import React, { useState } from "react";

import { View, StyleSheet, Text } from "react-native";

//stores
import progressStore from "../../stores/progressStore";
import taskStore from "../../stores/taskStore";

//observer
import { observer } from "mobx-react";
import moment from "moment";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
} from "victory-native";

const ProgressChart = () => {
  const progressList = progressStore.progresses.map((progress) =>
    taskStore.getTaskById(progress?.taskId)
  );
  // .map((progress) => <ProgressItem progress={progress} key={progress.id} />);

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
        //discuss condition with team
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

  // const [firstWeek, setFirstWeek] = useState({
  //   hours: 0,
  // });
  function reset() {
    const today = moment();
    const Sunday = today.day(0);
    const nextWeek = Sunday.endOf("week");
    console.log("nextweek", nextWeek);
    if (Sunday === nextWeek) data.Hours = 0;
  }
  // if (currentWeek === nextWeek) return data === 0;

  //   const today = moment();
  //   const week = today.startOf("week"); //start with sunday and its one week later
  //   const endweek = today.endOf("week");
  //   if (currentWeek == endweek) return data == 0;
  // }
  // function getSunday(d) {
  //   d = newDate(d);
  //   var day = d.getDay();
  //   diff = d.getDate() - day + (day == 0 ? -7 : 1);
  //   return new Date(d.setDate(diff));
  // }
  // function reset() {
  //   let week = today.endOf("week").getSunday();
  //   return data == 0;
  // }

  // when its a new week set Hours to 0

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
      <Text>Weekly Progress</Text>
      <VictoryChart width={350} palette="Soft">
        <VictoryAxis label="Week" />
        <VictoryAxis dependentAxis label="Hours" />

        <VictoryGroup offset={20} />
        <VictoryBar data={data} x="Week" y="Hours" />
      </VictoryChart>
      {progressStore.reset()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    color: "#333",
  },
});

export default observer(ProgressChart);
