
export default function empFilter(data, employees) {
  const buttonFilter = document.querySelectorAll('.btn-filter');

  buttonFilter.forEach((button) => {
    button.addEventListener('click', () => {
      const filterType = button.name;
      let filterData = [];

      switch (filterType) {
        case 'Rise':
          filterData = data.filter((element) => element.rise); // Фільтруємо дані
          break;
        case 'Salary':
          filterData = data.filter((element) => element.salary > 1000);
          break;
        default:
          filterData = data;
          break;
      }

      employees.loadInitialData(filterData); // Оновлюємо дані

    });
  });
}
