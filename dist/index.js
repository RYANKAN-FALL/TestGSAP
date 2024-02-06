"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/webflow/getPublishDate.js
  var getPublishDate = (page = document) => {
    const publishDatePrefix = "Last Published:";
    for (const node of page.childNodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.textContent?.includes(publishDatePrefix)) {
        const publishDateValue = node.textContent.trim().split(publishDatePrefix)[1];
        if (publishDateValue)
          return new Date(publishDateValue);
      }
    }
  };

  // src/utils/greet.ts
  var greetUser = (name) => {
    const publishDate = getPublishDate();
    console.log(`Hello ${name}!`);
    console.log(
      `This site was last published on ${publishDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      })}.`
    );
  };

  // src/index.ts
  window.Webflow = window.Webflow || [];
  window.Webflow.push(async () => {
    const name = "YOGA";
    greetUser(name);
    function searchCMS(titleToSearch) {
      const itemElements = document.querySelectorAll('[data-element="cms-item"]');
      const titleElements = document.querySelectorAll('[data-element="cms-title"]');
      console.log("CMS Item Elements:", itemElements);
      console.log("CMS Title Elements:", titleElements);
      const searchQuery = titleToSearch.toLowerCase();
      titleElements.forEach((titleElement, index) => {
        const titleText = titleElement.textContent?.toLowerCase();
        const correspondingItem = itemElements[index];
        if (correspondingItem) {
          if (titleText && titleText.includes(searchQuery)) {
            correspondingItem.style.display = "block";
          } else {
            correspondingItem.style.display = "none";
          }
        }
      });
    }
    const searchInput = document.querySelector('[data-element="cms-search"]');
    if (searchInput) {
      searchInput.addEventListener("input", function() {
        const titleToSearch = this.value;
        searchCMS(titleToSearch);
      });
    }
  });
})();
//# sourceMappingURL=index.js.map
