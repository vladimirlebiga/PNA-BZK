////////////////////////////////////////////////////////////////////

// // 1. voorbereiding
// function handleVoorbereidingClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("1-voorbereiding.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// // 2. werkgebied
// function handleWerkgebiedClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("2-werkgebied.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// // 3. bronnen
// function handleBronnenClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("3-bronnen.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// // 4. valideren
// function handleValiderenClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("4-valideren.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// // 5. modelleren
// function handleModellerenClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("5-modelleren.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// // 6. simuleren
// function handleSimulerenClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("6-simuleren.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// // 7. bijstellen
// function handleBijstellenClick(event) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     const pageAdres = target.closest("li").dataset.page;
//     sessionStorage.setItem("7-bijstellen.html", elementId);
//     window.location.assign(`/content/activiteitenschema/${pageAdres}`);
//   }
// }

// const voorbereiding = document.querySelector(
//   "li[data-page='1-voorbereiding.html'] .activiteiten-list-small"
// );
// const werkgebied = document.querySelector(
//   "li[data-page='2-werkgebied.html'] .activiteiten-list-small"
// );
// const bronnen = document.querySelector(
//   "li[data-page='3-bronnen.html'] .activiteiten-list-small"
// );
// const valideren = document.querySelector(
//   "li[data-page='4-valideren.html'] .activiteiten-list-small"
// );
// const modelleren = document.querySelector(
//   "li[data-page='5-modelleren.html'] .activiteiten-list-small"
// );
// const simuleren = document.querySelector(
//   "li[data-page='6-simuleren.html'] .activiteiten-list-small"
// );
// const bijstellen = document.querySelector(
//   "li[data-page='7-bijstellen.html'] .activiteiten-list-small"
// );

// voorbereiding.addEventListener("click", handleVoorbereidingClick);
// werkgebied.addEventListener("click", handleWerkgebiedClick);
// bronnen.addEventListener("click", handleBronnenClick);
// valideren.addEventListener("click", handleValiderenClick);
// modelleren.addEventListener("click", handleModellerenClick);
// simuleren.addEventListener("click", handleSimulerenClick);
// bijstellen.addEventListener("click", handleBijstellenClick);

/////////////////////////////////////////////////////////////////

function handleClick(event, stepName, pageName) {
  const target = event.target.closest("div");
  if (target && target.dataset.filter) {
    const elementId = target.dataset.filter;
    sessionStorage.setItem(`${stepName}.html`, elementId);
    window.location.assign(
      `https://vladimirlebiga.github.io/PNA-BZK/content/activiteitenschema/${pageName}`
    );
  }
}

// Add event listeners with bound parameters
voorbereiding.addEventListener("click", function (event) {
  handleClick(event, "1-voorbereiding", "1-voorbereiding.html");
});
werkgebied.addEventListener("click", function (event) {
  handleClick(event, "2-werkgebied", "2-werkgebied.html");
});
bronnen.addEventListener("click", function (event) {
  handleClick(event, "3-bronnen", "3-bronnen.html");
});
valideren.addEventListener("click", function (event) {
  handleClick(event, "4-valideren", "4-valideren.html");
});
modelleren.addEventListener("click", function (event) {
  handleClick(event, "5-modelleren", "5-modelleren.html");
});
simuleren.addEventListener("click", function (event) {
  handleClick(event, "6-simuleren", "6-simuleren.html");
});
bijstellen.addEventListener("click", function (event) {
  handleClick(event, "7-bijstellen", "7-bijstellen.html");
});

///////////////////////////////////////////////////////////////////

// Define a function to handle navigation and set sessionStorage
// function handleClick(event, stepName, pageName) {
//   const target = event.target.closest("div");
//   if (target && target.dataset.filter) {
//     const elementId = target.dataset.filter;
//     // Save the filter to sessionStorage for use on the target page
//     sessionStorage.setItem(`${stepName}.html`, elementId);
//     // Adjust the path to include the repository name if necessary
//     window.location.assign(`/PNA-BZK/content/activiteitenschema/${pageName}`);
//   }
// }

// // Add event listeners to each activity step if they exist
// if (voorbereiding) {
//   voorbereiding.addEventListener("click", function (event) {
//     handleClick(event, "1-voorbereiding", "1-voorbereiding.html");
//   });
// }

// if (werkgebied) {
//   werkgebied.addEventListener("click", function (event) {
//     handleClick(event, "2-werkgebied", "2-werkgebied.html");
//   });
// }

// if (bronnen) {
//   bronnen.addEventListener("click", function (event) {
//     handleClick(event, "3-bronnen", "3-bronnen.html");
//   });
// }

// if (valideren) {
//   valideren.addEventListener("click", function (event) {
//     handleClick(event, "4-valideren", "4-valideren.html");
//   });
// }

// if (modelleren) {
//   modelleren.addEventListener("click", function (event) {
//     handleClick(event, "5-modelleren", "5-modelleren.html");
//   });
// }

// if (simuleren) {
//   simuleren.addEventListener("click", function (event) {
//     handleClick(event, "6-simuleren", "6-simuleren.html");
//   });
// }

// if (bijstellen) {
//   bijstellen.addEventListener("click", function (event) {
//     handleClick(event, "7-bijstellen", "7-bijstellen.html");
//   });
// }
