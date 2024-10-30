export class StateManager {
  constructor() {
    this._inputTask = document.querySelector(".add_task");
    this._pinnedTask = document.querySelector(".pinned-tasks");
    this._allTasks = document.querySelector(".all-tasks");
    this._modal = document.querySelector(".modal");
    this._modalButtonClose = document.querySelector(".close");
    this._noPinned = document.querySelector(".no-pinned");
    this._arrayAllTasks = [];
    this._arrayPinnedTasks = [];
  }
}
