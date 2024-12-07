"use strict"
//-------------------------------------------------------


import { modules } from "./components/app/scripts/main";



document.addEventListener('DOMContentLoaded', () => {


  modules.initHeaderMenu();
  modules.initAccordion();
  modules.initEmployes();


  const input = document.querySelector('.search-input');

  input.addEventListener('input', (e)=>{
    console.log(input.value);
  })

  console.log(input.value)


})





























