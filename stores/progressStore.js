import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import data from "../components/tasks/ProgressChart";
import taskStore from "./taskStore";

class ProgressStore {
  progresses = [];

  constructor() {
    makeAutoObservable(this);
  }
  ChangeDateToDayNumber = (date) => {
    const day = new Date(date);

    return day.getDay();
  };
  fetchProgresses = async () => {
    const progresses = await AsyncStorage.getItem("progress");
    runInAction(() => {
      this.progresses = progresses ? JSON.parse(progresses) : [];
    });
  };

  addToProgress = async (newProgress) => {
    let foundProgress = this.progresses.find(
      (progress) => progress.taskId === newProgress.taskId
    );
    let foundDay = this.progresses.find(
      (progress) =>
        ChangeDateToDayNumber(
          taskStore.getTaskById(progress.taskId).endDate
        ) ===
        ChangeDateToDayNumber(taskStore.getTaskById(newProgress.taskId).endDate)
    );
    if (foundDay) {
      this.progresses = [];
      this.progresses.push(newProgress);
    } else {
      if (!foundProgress) {
        this.progresses.push(newProgress);
      } else {
        await AsyncStorage.setItem("progress", JSON.stringify(this.progresses));
      }
    }

    // AsyncStorage.clear("progress");
    // discuss if task was split into different days ,task id ,progressid ?
  };
  // reset = () => {
  //   const today = moment();
  //   const Sunday = today.day(0);
  //   const nextWeek = Sunday.endOf("week");

  //   if (Sunday === nextWeek) data.Hours = 0;
  // };
}
const progressStore = new ProgressStore();
progressStore.fetchProgresses();
export default progressStore;
