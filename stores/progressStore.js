import { makeAutoObservable } from "mobx";
import instance from "./instance";

// I think maybe you don't need this store at all
// but if you end up needing it, here're my comments....

class ProgressStore {
  progress = null;

  // spelling
  // progres = {
  //   days: 5,
  //   hours: 8,
  //   id: 3,
  //   userId: 4,
  //   username: "Sara",
  // };

  // do you need loading?
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserProgress = (progress) => {
    this.progress = progress;
  };

  // camelCase, not PascalCase. progressUpdate not ProgressUpdate.
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
