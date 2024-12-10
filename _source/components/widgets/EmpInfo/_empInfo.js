export const empInfo = (data) => {
  const totalElement = document.querySelector("#total");
  const premiumElement = document.querySelector("#premium");

  // Оновлення тексту
  totalElement.textContent = data.length;
  premiumElement.textContent = data.filter((item) => item.increase).length;
};
