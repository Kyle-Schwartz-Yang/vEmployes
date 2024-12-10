class Employees {
  constructor(containerSelector, infoContainerSelector) {
    this.data = [];
    this.container = document.querySelector(containerSelector);
    this.infoContainer = document.querySelector(infoContainerSelector); // Додаємо контейнер для статистики
  }

  // Завантаження початкових даних
  loadInitialData(data) {
    this.data = data;
    this.render();
    this.updateEmployeeStats(); // Оновлюємо статистику після завантаження
  }

  // Додавання співробітника
  addEmployee(name, salary, increase = false, rise = false) {
    const employee = { name, salary, increase, rise };
    this.data.push(employee);
    this.render();
    this.updateEmployeeStats(); // Оновлюємо статистику після додавання
  }

  // Видалення співробітника
  removeEmployee(index) {
    this.data.splice(index, 1);
    this.render();
    this.updateEmployeeStats(); // Оновлюємо статистику після видалення
  }

  // Генерація HTML для одного співробітника
  createEmployeeElement(employee, index) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    if (employee.increase) li.classList.add("increase");
    if (employee.rise) li.classList.add("like");

    li.innerHTML = `
      <span class="list-group-item-label">${employee.name}</span>
      <input type="text" class="list-group-item-input" value="${employee.salary}">
      <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn-cookie btn-sm">
          <i class="fas fa-cookie"></i>
        </button>
        <button type="button" class="btn-trash btn-sm">
          <i class="fas fa-trash"></i>
        </button>
        <i class="fas fa-star"></i>
      </div>
    `;

    const trash = li.querySelector(".btn-trash");
    const item = li.querySelector(".list-group-item-label");
    const cookie = li.querySelector(".btn-cookie");

    trash.addEventListener("click", () => this.removeEmployee(index));
    item.addEventListener("click", () => {
      employee.rise = !employee.rise;
      this.render();
      this.updateEmployeeStats(); // Оновлюємо статистику після зміни статусу
    });
    cookie.addEventListener("click", () => {
      employee.increase = !employee.increase;
      this.render();
      this.updateEmployeeStats(); // Оновлюємо статистику після зміни премії
    });

    return li;
  }

  // Оновлення статистики співробітників
  updateEmployeeStats() {
    const total = this.data.length; // Загальна кількість співробітників
    const premium = this.data.filter((item) => item.increase).length; // Кількість преміальних співробітників

    if (this.infoContainer) {
      this.infoContainer.querySelector("#total").textContent = total;
      this.infoContainer.querySelector("#premium").textContent = premium;
    }
  }

  // Відображення списку
  render() {
    this.container.innerHTML = "";
    const empty = document.querySelector(".empty-message");

    if (this.data.length <= 0) {
      empty.style = "display: block";
      return;
    }

    empty.style.display = "none";
    this.data.forEach((employee, index) => {
      const employeeElement = this.createEmployeeElement(employee, index);
      this.container.appendChild(employeeElement);
    });
  }
}

export default Employees;
