import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class TaskTodoStore {
  userTasks = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // fetchUserTasks = async (userId) => {
  //   try {
  //     const response = await instance.get(`/tasks/${userId}`);
  //     runInAction(() => {
  //       this.userTasks = response.data;
  //       this.loading = false;
  //     });
  //     console.log(this.userTasks);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // ****************** Add Task Todo Item METHOD ******************
  taskTodoItemAdd = async (newTaskTodoItem, taskId, task) => {
    try {
      const response = await instance.post(
        `/tasks/${taskId}/taskTodoItems`,
        newTaskTodoItem
      );

      //runInAction(() => {
      task.taskTodoItems.push(response.data);
      // });
    } catch (error) {
      console.error(error);
    }
  };
  markTaskTodoItem = async (taskId, updatedTodo, todoId) => {
    try {
      const response = await instance.put(
        `/tasks/${taskId}/taskTodoItems/mark/${todoId}`
      );
      runInAction(() => {
        updatedTodo = response.data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  taskTodoItemDelete = async (taskId, task, todoId) => {
    try {
      await instance.delete(`/tasks/${taskId}/taskTodoItems/${todoId}`);
      runInAction(() => {
        task.taskTodoItems = task.taskTodoItems.filter(
          (todo) => todo.id !== todoId
        );
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const taskTodoStore = new TaskTodoStore();
export default taskTodoStore;
