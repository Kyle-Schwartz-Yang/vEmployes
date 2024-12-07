"use strict";
//-------------------------------------------------------

import { modules } from "./components/app/scripts/main";

document.addEventListener("DOMContentLoaded", () => {
  modules.initHeaderMenu();
  modules.initAccordion();
  modules.initEmployes();
});
