import instance from "./instance";
import { makeAutoObservable, runInAction } from "mobx";
import decode from "jwt-decode";

import AsyncStorage from "@react-native-async-storage/async-storage";
class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser, navigation) => {
    try {
      const res = await instance.post("/register", newUser);
      runInAction(() => {
        this.setUser(res.data.token);
        navigation.replace("Main");
      });
    } catch (error) {
      console.error(error);
    }
  };
  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    runInAction(() => {
      this.user = null;
    });
  };
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    runInAction(() => {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
      profileStore.setUserProfile(this.user.profile); //get profile when user logs/signs in
    });
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    runInAction(() => {
      if (token) {
        const currentTime = Date.now();
        const user = decode(token);
        if (user.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    });
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
