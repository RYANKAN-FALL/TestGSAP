import { greetUser } from '$utils/greet';

window.Webflow = window.Webflow || [];
window.Webflow.push(async () => {
  const name = 'YOGA';
  greetUser(name);

  function searchCMS(titleToSearch) {
    const itemElements = document.querySelectorAll('[data-element="cms-item"]');
    const titleElements = document.querySelectorAll('[data-element="cms-title"]');

    console.log('CMS Item Elements:', itemElements);
    console.log('CMS Title Elements:', titleElements);

    const searchQuery = titleToSearch.toLowerCase();

    titleElements.forEach((titleElement, index) => {
      const titleText = titleElement.textContent?.toLowerCase();
      const correspondingItem = itemElements[index];

      if (correspondingItem) {
        if (titleText && titleText.includes(searchQuery)) {
          correspondingItem.style.display = 'block';
        } else {
          correspondingItem.style.display = 'none';
        }
      }
    });
  }

  const searchInput = document.querySelector('[data-element="cms-search"]');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const titleToSearch = this.value;
      searchCMS(titleToSearch);
    });
  }
});
