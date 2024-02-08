"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/@finsweet/ts-utils/dist/webflow/getPublishDate.js
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
  if (window.Webflow) {
    window.Webflow.push(async () => {
      const name = "YOGA";
      greetUser(name);
      if (window.gsap) {
        let loopTl = gsap.timeline({ repeat: -1, yoyo: true });
        loopTl.to(".hero-image", { y: "-1rem", duration: 1, ease: "power1.inOut" });
        const loadTl = gsap.timeline();
        loadTl.from(".title-wrap", { opacity: 0, y: "6rem", duration: 5 });
        loadTl.from(".image1", { scale: 0, stagger: { amount: 0.5 }, duration: 2 });
        loadTl.from(".hero-image", { opacity: 0, scale: 0.8, duration: 1 });
      }
    });
  }
})();
//# sourceMappingURL=index.js.map
