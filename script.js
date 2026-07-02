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
    // ⚡ Bolt: Added `dropdown.classList.contains('open')` check to avoid unnecessary DOM queries (querySelector) on every global click when no dropdown is actually open.
    if (!dropdown.contains(event.target) && dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ⚡ Bolt: Cached querySelectorAll('details') outside the event listener to avoid re-querying the entire DOM on every toggle event.
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsElements.forEach(other => {
        // ⚡ Bolt: Added `other.open` check to avoid mutating DOM state unnecessarily.
        if (other !== item && other.open) other.open = false;
      });
    }
  });
});
