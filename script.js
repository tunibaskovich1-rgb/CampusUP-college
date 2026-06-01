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

// ⚡ Bolt: Cache open dropdown checks to skip unnecessary DOM queries on every click
document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    // ⚡ Bolt: Only process dropdowns that are actually open and were not clicked
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ⚡ Bolt: Cache static NodeList globally rather than re-querying inside the callback
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsElements.forEach(other => {
        // ⚡ Bolt: Only set open = false if it's currently open to avoid redundant state updates
        if (other !== item && other.open) other.open = false;
      });
    }
  });
});
