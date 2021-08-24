import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class TaskNoteStore {
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ****************** Add Task Note Item METHOD ******************
  taskNoteAdd = async (newTaskNote, taskId, task) => {
    try {
      const response = await instance.post(
        `/tasks/${taskId}/taskNote`,
        newTaskNote
      );
      task.taskNote = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  //****************** Delete Task Note Item METHOD ******************
  taskNoteDelete = async (taskId, task, noteId) => {
    try {
      await instance.delete(`/tasks/${taskId}/taskNote/${noteId}`);
      runInAction(() => {
        task.taskNote = "";
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const taskNoteStore = new TaskNoteStore();
export default taskNoteStore;
