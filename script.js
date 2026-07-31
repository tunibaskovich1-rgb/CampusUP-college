const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

const dropdowns = document.querySelectorAll('.dropdown');

/*
 * ⚡ Bolt Optimization:
 * Caching the dropdown toggle elements during initialization prevents redundant DOM queries
 * on every document click. Previously, `dropdown.querySelector('.dropdown-toggle')` was
 * running in a loop on every click anywhere on the page, causing unnecessary layout thrashing.
 * Expected Impact: Reduces DOM query latency and memory allocation on widespread click events.
 */
const dropdownMap = new Map();

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  if (!toggle) return;

  dropdownMap.set(dropdown, toggle);

  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('click', event => {
  dropdownMap.forEach((toggle, dropdown) => {
    /*
     * ⚡ Bolt Optimization:
     * Only manipulate the DOM if the dropdown is actually open.
     * This avoids costly repaints and style recalculations by bypassing
     * `classList.remove` and `setAttribute` calls on elements that are already closed.
     */
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

/*
 * ⚡ Bolt Optimization:
 * Cache the query for all details elements once instead of querying the DOM
 * repeatedly inside the toggle event listener.
 * Expected Impact: Prevents N+1 DOM queries when a `<details>` element is toggled.
 */
const detailsElements = document.querySelectorAll('details');

detailsElements.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsElements.forEach(other => {
        if (other !== item && other.open) {
           other.open = false;
        }
      });
    }
  });
});
