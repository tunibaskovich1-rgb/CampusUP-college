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

document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      // ⚡ Bolt: Check if dropdown is open before querying for toggle to avoid unnecessary DOM traversal.
      if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// ⚡ Bolt: Cache details elements to avoid querying the DOM repeatedly during toggle events.
// Impact: Reduces redundant DOM queries, improving toggle listener performance.
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
