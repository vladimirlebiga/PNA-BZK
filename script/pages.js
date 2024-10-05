document.addEventListener("DOMContentLoaded", () => {
  const links = {
    // 1. voorbereiding
    "#team-samen": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "1. Voorbereding en planning",
        // "a. Stel een team samen",
      ],
    },
    "#globale-planning": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "1. Voorbereding en planning",
        // "b. Maak een globale planning",
      ],
    },
    "#plan-werksessies": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "1. Voorbereding en planning",
        // "c. Plan werksessies in",
      ],
    },

    // 2. werkgebied
    "#taak-bepalen": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "2. Werkgebied bepalen / Bronnen verzamelen",
        // "a. Taak bepalen",
      ],
    },
    "#verzamelen-wetgeving": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "2. Werkgebied bepalen / Bronnen verzamelen",
        // "b. Verzamelen van relevante wetgeving",
      ],
    },
    "#overzicht-maken": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "2. Werkgebied bepalen / Bronnen verzamelen",
        // "c. Een overzicht maken",
      ],
    },
    "#conceptregeling-maken": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "2. Werkgebied bepalen / Bronnen verzamelen",
        // "d. Een conceptregeling maken",
      ],
    },
    "#planning-aanpassen": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "2. Werkgebied bepalen / Bronnen verzamelen",
        // "e. Planning aanpassen",
      ],
    },

    // 3. bronnen
    "#structuur-maken": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "3. Bronnen structureren en interpreteren",
        // "a. Juridische structuur zichtbaar maken",
      ],
    },
    "#expliciet-maken": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "3. Bronnen structureren en interpreteren",
        // "b. De betekenis van de bepalingen expliciet maken",
      ],
    },

    // 4. valideren
    "#valideren-van": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "4. Interpretaties valideren",
        // "a. Valideren van de analyseresultaten",
      ],
    },
    "#verschillen-benoemen": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "4. Interpretaties valideren",
        // "b. Verschillen in interpretaties benoemen en bespreken in het team",
      ],
    },
    "#uitvoeringsbeleid-signaleren": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "4. Interpretaties valideren",
        // "c. Ontbrekend of verborgen uitvoeringsbeleid signaleren",
      ],
    },

    // 5. modelleren
    "#kennis-model": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "5. Kennis modelleren",
        // "a. Een kennismodel opstellen",
      ],
    },
    "#team-bespreken": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "5. Kennis modelleren",
        // "b. Het model in het team bespreken",
      ],
    },

    // 6. simuleren
    "#kennis-model": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "6. Taak simuleren",
        // "a. Een taak simuleren in de uitvoeringsorganisatie",
      ],
    },

    // 7. bijstellen
    "#simulatie-bespreken": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "7. Evalueren en bijstellen",
        // "a. Resultaten van de simulatie bespreken",
      ],
    },
    "#aanpassingen-doen": {
      breadCrumbles: [
        "Uitvoeringsgericht wetgeven",
        "Activiteitenschema",
        "7. Evalueren en bijstellen",
        // "b. Aanpassingen doen waar het nodig is",
      ],
    },
  };

  const location = window.location.pathname.split("/");
  const pageId = sessionStorage.getItem(location[location.length - 1]);
  const elem = document.querySelector(pageId);

  elem.classList.toggle("active");

  const pageElem = elem.closest("li");
  const p = pageElem.querySelector(".activiteiten-item");
  const arrow = pageElem.querySelector(".arrow");
  p.classList.toggle("active");
  arrow.classList.toggle("active");

  const { breadCrumbles } = links[pageId];
  createBreadCrumbles(breadCrumbles);
});
