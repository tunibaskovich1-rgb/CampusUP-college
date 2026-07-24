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
 * ⚡ Bolt: Performance optimization
 * Impact: Prevents unnecessary DOM traversals (querySelector) inside the global click listener
 * by adding an early return state check. Also caches the 'details' elements to avoid
 * repeating document.querySelectorAll on every toggle event.
 * Measurement: Reduces main thread blocking during global clicks and details toggles.
 */
document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    // ⚡ Bolt: Added state check to avoid DOM querying if already closed
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ⚡ Bolt: Cached details elements outside the event listener
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsElements.forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
