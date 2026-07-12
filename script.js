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
      // ⚡ Bolt: Only query DOM and modify state if dropdown is actually open
      // Expected impact: Eliminates unnecessary layout thrashing and DOM queries on every click
      if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// ⚡ Bolt: Cache details query outside event listener
// Expected impact: Prevents full DOM traversal every time a details element is toggled
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
