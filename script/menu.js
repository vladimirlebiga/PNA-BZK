document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector(".bars");
  const icon = bars.querySelector("#toggleIcon");
  const diagramContainer = document.querySelector(".diagram-container");

  bars.addEventListener("click", () => {
    // Toggle the icon classes
    if (diagramContainer.classList.contains("collapsed")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-chevron-down");
    } else {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-bars");
    }

    // Toggle the 'collapsed' class on the diagramContainer
    diagramContainer.classList.toggle("collapsed");
  });
});
