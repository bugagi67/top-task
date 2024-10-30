import { StateManager } from "./StateManager";
import { Task } from "./Task";
import { UiManager } from "./UiManager";

const state = new StateManager();
const uiManager = new UiManager();
const task = new Task();

task.checkPinnedTask(state, uiManager);

document.addEventListener("keyup", (e) => {
  if (state._inputTask.value !== "" && e.code === "Enter") {
    task.addTask(state._inputTask.value, state);
    state._inputTask.value = "";
  } else if (state._inputTask.value === "" && e.code === "Enter") {
    uiManager.openModal(state);
  }
});

state._inputTask.addEventListener("input", () => {
  task.filterTask(state);
});

state._modalButtonClose.addEventListener("click", () => {
  uiManager.closeModal(state);
});

state._modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    uiManager.closeModal(state);
  }
});

state._allTasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("not_pinned")) {
    const taskElement = e.target.parentNode;
    task.pinedTask(taskElement, state);
    uiManager.deleteNoPined(state);
  }
});

state._pinnedTask.addEventListener("click", (e) => {
  if (e.target.classList.contains("pinned_task")) {
    const taskElement = e.target.parentNode;
    task.unpinTask(taskElement, state, uiManager);
  }
});

task.addTask("Привет", state);
task.addTask("Пока", state);
task.addTask("Хлеб", state);
task.addTask("Молоко", state);
