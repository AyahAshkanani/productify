import { makeAutoObservable } from "mobx";
import instance from "./instance";

class PreferencesStore {
  preferences = ""; //its not a string value right? I believe its an object right? so why "" why not null?

  constructor() {
    makeAutoObservable(this);
  }

  setUserPreferences = (preferences) => {
    this.preferences = preferences;
  };

  PreferencesUpdate = async (updatedPreferences) => {
    try {
      await instance.put(
        `/preferences/${updatedPreferences.id}`,
        updatedPreferences
      );
      for (const key in this.preferences)
        this.preferences[key] = updatedPreferences[key];
      /*
       const response = await instance.put(`/progress/${updatedProgress.id}`, updatedProgress);
        for (const key in this.progress)
        this.progress[key] = response.data[key];
       */
    } catch (error) {
      console.error(error);
    }
  };
}

const preferencesStore = new PreferencesStore();
export default preferencesStore;
