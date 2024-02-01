window.Webflow = window.Webflow || [];
window.Webflow.push(async () => {
  function searchCMS(titleToSearch) {
    const itemElements = document.querySelectorAll('[data-element="cms-item"]');
    const titleElements = document.querySelectorAll('[data-element="cms-title"]');

    console.log('CMS Item Elements:', itemElements);
    console.log('CMS Title Elements:', titleElements);

    titleElements.forEach((titleElement, index) => {
      const titleText = titleElement.textContent;

      // Check if the current title matches the titleToSearch
      if (titleText.includes(titleToSearch)) {
        const correspondingItem = itemElements[index];
        console.log('Title Text:', titleText);
        console.log('Corresponding CMS Item:', correspondingItem);
      }
    });
  }

  // Add an event listener to the input field with data-element="cms-search"
  const searchInput = document.querySelector('[data-element="cms-search"]');
  searchInput.addEventListener('input', function () {
    const titleToSearch = this.value;
    searchCMS(titleToSearch);
  });
});
