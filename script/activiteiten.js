//  activates small menu and rotates the arrow by 90 degrees clockwise

document.addEventListener("DOMContentLoaded", () => {
  const tab = document.querySelector(".activiteiten-list");
  tab.addEventListener("click", (e) => {
    const target = e.target;
    const parent = target.closest("li");
    const dataTarget = parent.dataset.filter;

    const img = parent.querySelector(".arrow");
    const text = parent.querySelector(".activiteiten-item");

    if (!dataTarget) {
      return;
    }
    const smallMenu = document.querySelector(dataTarget);
    if (!smallMenu) {
      return;
    }

    smallMenu.classList.toggle("active");
    text.classList.toggle("active");
    img.classList.toggle("active");
  });
});
