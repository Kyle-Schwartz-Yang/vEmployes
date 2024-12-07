


export default function empAddForm(data, employees) {
  document.querySelector('.add-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Уникаємо стандартної поведінки форми

    const name = document.querySelector('input[name="name"]').value.trim();
    const salary = document.querySelector('input[name="salary"]').value.trim();

    if (name && salary) {
      employees.addEmployee(name, parseInt(salary, 10)); // Додаємо співробітника
      document.querySelector('input[name="name"]').value = ''; // Очищаємо форму
      document.querySelector('input[name="salary"]').value = '';
    } else {
      alert('Будь ласка, заповніть усі поля!');
    }
  });
}