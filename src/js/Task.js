export class Task {
  constructor() {}

  filterTask(state) {
    const query = state._inputTask.value.trim().toLowerCase();

    Array.from(state._allTasks.children).forEach((child) => child.remove());

    const filteredTasks = state._arrayAllTasks.filter((task) => {
      const taskText = task.outerText.toLowerCase();
      console.log(taskText);
      return taskText.includes(query);
    });

    filteredTasks.forEach((task) => {
      state._allTasks.appendChild(task);
    });
  }

  addTask(elem, state) {
    const container = state._allTasks;
    const div = document.createElement("div");
    div.classList.add("task");
    container.insertAdjacentElement("beforeend", div);
    const spanTextTask = document.createElement("span");
    spanTextTask.innerText = elem;
    div.insertAdjacentElement("beforeend", spanTextTask);
    const buttonPinedTask = document.createElement("button");
    buttonPinedTask.innerText = "○";
    buttonPinedTask.classList.add("not_pinned");
    div.insertAdjacentElement("beforeend", buttonPinedTask);

    state._arrayAllTasks.push(div);

    state._arrayAllTasks.forEach((task) => {
      state._allTasks.appendChild(task);
    });
  }

  pinedTask(elem, state) {
    const pinedElement = elem;
    elem.remove();

    pinedElement.classList.add("pinned");
    const buttonPinedTask = pinedElement.querySelector(".not_pinned");
    buttonPinedTask.innerText = "▼";
    buttonPinedTask.classList.remove("not_pinned");
    buttonPinedTask.classList.add("pinned_task");
    state._pinnedTask.insertAdjacentElement("afterbegin", pinedElement);

    state._arrayPinnedTasks.push(pinedElement);
    state._arrayAllTasks = state._arrayAllTasks.filter(
      (elem) => elem !== pinedElement,
    );
  }

  unpinTask(elem, state, uiManage) {
    const pinedElement = elem;
    elem.remove();
    this.checkPinnedTask(state, uiManage);

    pinedElement.classList.remove("pinned");
    const buttonUnPinedTask = pinedElement.querySelector(".pinned_task");
    buttonUnPinedTask.innerText = "○";
    buttonUnPinedTask.classList.remove("pinned_task");
    buttonUnPinedTask.classList.add("not_pinned");
    state._allTasks.insertAdjacentElement("afterbegin", pinedElement);

    state._arrayAllTasks.push(pinedElement);
    state._arrayPinnedTasks = state._arrayPinnedTasks.filter(
      (elem) => elem !== pinedElement,
    );
    console.log(state._arrayAllTasks);
    console.log(state._arrayPinnedTasks);
  }

  checkPinnedTask(state, uiManage) {
    if (state._pinnedTask.children.length > 1) {
      uiManage.deleteNoPined(state);
    }
    if (state._pinnedTask.children.length <= 1) {
      uiManage.addNoPined(state);
    }
  }
}
