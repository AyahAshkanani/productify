import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import data from "../components/tasks/ProgressChart";
class ProgressStore {
  progresses = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchProgresses = async () => {
    const progresses = await AsyncStorage.getItem("progress");
    runInAction(() => {
      this.progresses = progresses ? JSON.parse(progresses) : [];
    });
  };

  addToProgress = async (newProgress) => {
    var foundProgress = this.progresses.find(
      (progress) => progress.taskId === newProgress.taskId
    );
    if (!foundProgress) {
      this.progresses.push(newProgress);
    } else {
      await AsyncStorage.setItem("progress", JSON.stringify(this.progresses));
    }
    // AsyncStorage.clear("progress");
    // discuss if task was split into different days ,task id ,progressid ?
  };
  reset = () => {
    const today = moment();
    const Sunday = today.day(0);
    const nextWeek = Sunday.endOf("week");

    if (Sunday === nextWeek) data.Hours = 0;
  };

  // get totalHours() {
  // let total = 0;
  // this.progresses.forEach((progress) => (total += progress.hours));
  // return total;
  // }

  // get totalQuantity() {
  //   let quantity = this.progresses.length;
  //   return quantity;
  // }
  // }
}
const progressStore = new ProgressStore();
progressStore.fetchProgresses();
export default progressStore;
