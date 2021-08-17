import instance from "./instance";
import { makeAutoObservable, runInAction } from "mobx";
import decode from "jwt-decode";

import AsyncStorage from "@react-native-async-storage/async-storage";
class AuthStore {
  loading = true;
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  register = async (newUser, navigation) => {
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

  login = async (userData) => {
    try {
      const res = await instance.post("/login", userData);
      this.setUser(res.data.token);
      await profileStore.setProfile(this.user.id);
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
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    await profileStore.setProfile(this.user.id);
    this.loading = false;
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
