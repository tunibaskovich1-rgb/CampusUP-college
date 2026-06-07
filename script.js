const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

/*
 * ⚡ Bolt Optimization:
 * Reduces unnecessary DOM queries and state updates on every click and toggle.
 * Impact: Reduces DOM access operations by O(n) per click/toggle by early returning and caching NodeLists.
 */
document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const allDetails = document.querySelectorAll('details');
allDetails.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      allDetails.forEach(other => {
        if (other !== item && other.open) other.open = false;
      });
    }
  });
});
