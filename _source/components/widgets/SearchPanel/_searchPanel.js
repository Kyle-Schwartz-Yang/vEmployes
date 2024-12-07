

export const initSerchEmployees =  (data, employees) =>{


  const input = document.querySelector('.search-input');


  input.addEventListener('input', (event) => {

    const target = event.target;
    const searchTerm = target.value.trim().toLowerCase();

    if(searchTerm.length === 0) {
      employees.loadInitialData(data);
      return ;
    }

    const serchEmpData = data.filter(item => item.name.toLowerCase().includes(searchTerm));

   return  employees.loadInitialData(serchEmpData);
  })


}
