import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";
import Toast from "react-native-toast-message";

class TaskStore {
  tasks = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUserTasks = async (userId) => {
    try {
      const response = await instance.get(`/tasks/${userId}`);
      runInAction(() => {
        this.tasks = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // fetchTasks = async () => {
  //   try {
  //     const response = await instance.get("/tasks");
  //     runInAction(() => {
  //       this.tasks = response.data;
  //       this.loading = false;
  //     });
  //   } catch (error) {
  //     console.error("fetch error", error);
  //     // network error when we have "fetchTasks",
  //   }
  // };

  // ****************** Add Task METHOD ******************
  taskAdd = async (newTask, navigation) => {
    try {
      const response = await instance.post("/tasks", newTask);
      runInAction(() => {
        response.data.taskTodoItems = [];
        this.tasks.push(response.data);
        navigation.navigate("Home");
        Toast.show({
          text1: "Task Added Sucessfully!",
          text2: `${response.data.name}`,
        });
      });
      console.log(this.tasks);
      await this.fetchUserTasks(newTask.userId);
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
  };

  taskDelete = async (TaskId) => {
    try {
      await instance.delete(`/tasks/${TaskId}`);
      runInAction(() => {
        const updatedTasks = this.tasks.filter((task) => task.id !== TaskId);
        this.tasks = updatedTasks;
      });
    } catch (error) {
      console.error(error);
    }
  };

  taskUpdate = async (updateTask, navigation) => {
    try {
      const response = await instance.put(
        `/tasks/${updateTask.id}`,
        updateTask
      );
      // response.data.tasks = oldTask;
      const task = this.tasks.find((task) => task.id === response.data.id);

      for (const key in task) task[key] = response.data[key];

      navigation.replace("TaskDetail", { task: task });
    } catch (error) {
      error;
    }
  };
  getTaskById = (taskId) => this.tasks.find((task) => task.id === taskId);

  deleteTask = async (taskId) => {
    try {
      await instance.delete(`/tasks/${taskId}`);
      const updatedTask = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = updatedTask;
    } catch (error) {
      console.error(error);
    }
  };
}

const taskStore = new TaskStore();
//taskStore.fetchTasks();
export default taskStore;
