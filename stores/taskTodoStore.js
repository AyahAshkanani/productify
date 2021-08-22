import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class TaskTodoStore {
  userTasks = [];
  loading = true;
  //userTaskTodo = [];

  constructor() {
    makeAutoObservable(this);
  }

  //const fetchTaskTodo = () => {}

  fetchUserTasks = async (userId) => {
    try {
      const response = await instance.get(`/tasks/${userId}`);
      runInAction(() => {
        this.userTasks = response.data;
        this.loading = false;
      });
      //  console.log(this.userTasks);
    } catch (error) {
      console.error(error);
    }
  };

  // ****************** Add Task Todo Item METHOD ******************
  taskTodoItemAdd = async (newTaskTodoItem, taskId) => {
    try {
      const response = await instance.post(
        `/tasks/${taskId}/taskTodoItems`,
        newTaskTodoItem
      );
      //const foundTask = this.userTasks.values(taskId);
      //runInAction(() => {
      // console.log("task:" + this.userTasks.taskTodoItems);
      this.userTasks.taskTodoItems.push(response.data);
      // });
    } catch (error) {
      console.error(error);
    }
  };
}

const taskTodoStore = new TaskTodoStore();
export default taskTodoStore;
