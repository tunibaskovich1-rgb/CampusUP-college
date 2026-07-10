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
      // ⚡ Bolt: Check if dropdown is actually open before performing DOM query.
      // Expected impact: Prevents unnecessary querySelector calls on every click outside.
      if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// ⚡ Bolt: Cache all details elements to avoid redundant querySelectorAll calls on every toggle.
// Expected impact: Eliminates DOM search on each accordion toggle, making it O(1) DOM query instead of O(N) per interaction.
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
