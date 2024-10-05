// replacing and creating breadcrumbles links

const url = {
  "Uitvoeringsgericht wetgeven": { link: "../../index.html" },
  Activiteitenschema: { link: "./activiteitenschema.html" },
};

function createBreadCrumbles(array) {
  const element = document.querySelector("#bread-crumble");
  element.replaceWith(
    document.createRange().createContextualFragment(
      `
       <div id="bread-crumble" class="bread-crumble">
        ${array
          .map((item) => {
            return url[item]
              ? `<a href="${url[item].link}">${item}</a>`
              : `<p>${item}</p>`;
          })
          .join("<span>></span>")}
            </div>
      `
    )
  );
}

// ToDO:
// add Breadcrumbles next page from Activiteitenschema
