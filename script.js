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

// ⚡ Bolt: Prevent redundant DOM queries on every document click
document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    // Only query toggle and modify classes if the dropdown is actually open and click is outside
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ⚡ Bolt: Cache details elements once instead of querying DOM on every toggle event
const allDetails = document.querySelectorAll('details');
allDetails.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      allDetails.forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
