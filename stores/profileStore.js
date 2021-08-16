import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class ProfileStore {
  profile = {
    days: 5,
    hours: 8,
    id: 3,
    userId: 4,
    username: "Sara",
  };

  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserProfile = (profile) => {
    this.profile = profile;
  };

  ProfileUpdate = async (updatedProfile) => {
    console.log(updatedProfile);
    try {
      const response = await instance.put(`/profiles/${updatedProfile.id}`);
      const foundProfile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      console.log(profile);
      for (const key in foundProfile) foundProfile[key] = updatedProfile[key];
    } catch (error) {
      console.error(error);
    }
  };

  profileByUserId = (userId) =>
    this.profiles.find((profile) => profile.userId === userId);
}

const profileStore = new ProfileStore();
export default profileStore;
