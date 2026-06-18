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
    // Optimization: Only attempt to close the dropdown if it is actually open.
    // This prevents unnecessary DOM traversal and attribute updates on every click outside.
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Optimization: Cache NodeList globally to avoid running querySelectorAll on every toggle event.
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      detailsElements.forEach(other => {
        // Optimization: Check if other detail is open before updating property to avoid unnecessary repaints.
        if (other !== item && other.open) other.open = false;
      });
    }
  });
});
