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
    // ⚡ Bolt Optimization: Only modify DOM if dropdown is already open
    if (!dropdown.classList.contains('open')) return;

    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ⚡ Bolt Optimization: Cache DOM query to avoid requerying on every toggle
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
