const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

const dropdowns = document.querySelectorAll('.dropdown');
// ⚡ Bolt: Caching DOM queries inside dropdowns to prevent repeated DOM traversals on every click event.
// Impact: Reduces layout thrashing and DOM query overhead during user interactions.
const dropdownElements = Array.from(dropdowns).map(dropdown => {
  return {
    dropdown,
    toggle: dropdown.querySelector('.dropdown-toggle')
  };
});

dropdownElements.forEach(({ dropdown, toggle }) => {
  if (!toggle) return;
  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('click', event => {
  dropdownElements.forEach(({ dropdown, toggle }) => {
    if (!dropdown.contains(event.target)) {
      // ⚡ Bolt: Adding state check before modifying the DOM to avoid unnecessary restyling.
      // Impact: Prevents redundant DOM attribute writes and browser repaints for already-closed elements.
      if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// ⚡ Bolt: Caching document.querySelectorAll('details') to prevent expensive live NodeList lookups on every toggle event.
// Impact: Significantly reduces main thread blocking when interacting with accordions.
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsElements.forEach(other => {
        // ⚡ Bolt: Checking current state before modifying the DOM to prevent redundant operations.
        if (other !== item && other.open) other.open = false;
      });
    }
  });
});
