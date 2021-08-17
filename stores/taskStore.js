import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class TaskStore {
  tasks = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTasks = async () => {
    try {
      const response = await instance.get("/tasks");
      runInAction(() => {
        this.tasks = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("fetchTasks", error);
    }
  };

 
 

  // ****************** Add Task METHOD ******************
  taskAdd = async (newTask, navigation) => {
    try {
      const response = await instance.post("/tasks", newTask);
      runInAction(() => {
        this.tasks.push(response.data);
        navigation.navigate("Home");
      });
    } catch (error) {
      console.error(error);
    }
  };


  markTask = async (updatedTask) => {
    try {
      await instance.put(`/tasks/mark/${updatedTask.id}`);
      runInAction(() => {
        const foundTask = this.tasks.find((task) => task.id === updatedTask.id);
        foundTask["done"] = !foundTask["done"];

      });
    } catch (error) {
      console.error(error);
    }
  }
  
}

const taskStore = new TaskStore();
taskStore.fetchTasks();
export default taskStore;
