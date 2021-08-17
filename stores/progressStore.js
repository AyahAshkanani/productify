import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProgressStore {
  progress = null;

  // progres = {
  //   days: 5,
  //   hours: 8,
  //   id: 3,
  //   userId: 4,
  //   username: "Sara",
  // };

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserProgress = (progress) => {
    this.progress = progress;
  };

  ProgressUpdate = async (updatedProgress) => {
    try {
      await instance.put(`/progress/${updatedProgress.id}`, updatedProgress);
      for (const key in this.progress)
        this.progress[key] = updatedProgress[key];
    } catch (error) {
      console.error(error);
    }
  };
}

const progressStore = new ProgressStore();
export default progressStore;
