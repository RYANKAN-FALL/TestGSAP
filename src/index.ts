import { greetUser } from '$utils/greet';

window.Webflow = window.Webflow || [];
window.Webflow.push(async () => {
  const name = 'John Doe';
  greetUser(name);
  function searchCMS(titleToSearch: string) {
    const itemElements = document.querySelectorAll('[data-element="cms-item"]');
    const titleElements = document.querySelectorAll('[data-element="cms-title"]');

    console.log('CMS Item Elements:', itemElements);
    console.log('CMS Title Elements:', titleElements);

    const searchQuery = titleToSearch.toLowerCase(); // Convert the search query to lowercase

    titleElements.forEach((titleElement, index) => {
      const titleText = titleElement.textContent?.toLowerCase(); // Use optional chaining to handle possible null

      // Check if the current title matches the searchQuery
      if (titleText && titleText.includes(searchQuery)) {
        const correspondingItem = itemElements[index];
        console.log('Title Text:', titleText);
        console.log('Corresponding CMS Item:', correspondingItem);
      }
    });
  }

  // Add an event listener to the input field with data-element="cms-search"
  const searchInput = document.querySelector<HTMLInputElement>('[data-element="cms-search"]'); // Use HTMLInputElement to specify the type
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const titleToSearch = this.value;
      searchCMS(titleToSearch);
    });
  }
});
