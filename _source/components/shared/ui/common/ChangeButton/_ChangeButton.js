export const initChangeButton = () => {
  const change = document.querySelector(".change");

  change.addEventListener("click", (e) => {
    change.classList.toggle("_active");
  });
};
