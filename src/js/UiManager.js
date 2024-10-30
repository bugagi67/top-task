export class UiManager {
  constructor() {}

  openModal(state) {
    state._modal.style.display = "block";
  }

  closeModal(state) {
    state._modal.style.display = "none";
  }

  deleteNoPined(state) {
    state._noPinned.style.display = "none";
  }

  addNoPined(state) {
    state._noPinned.style.display = "block";
  }
}
