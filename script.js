const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

// Optimization: Cache dropdowns and their toggles to avoid repeated DOM queries
const dropdownData = Array.from(document.querySelectorAll('.dropdown')).map(dropdown => {
  return {
    dropdown,
    toggle: dropdown.querySelector('.dropdown-toggle')
  };
});

dropdownData.forEach(({ dropdown, toggle }) => {
  if (!toggle) return;
  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('click', event => {
  dropdownData.forEach(({ dropdown, toggle }) => {
    // Optimization: Only update DOM if the dropdown is actually open
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Optimization: Cache the details NodeList
const allDetails = document.querySelectorAll('details');
allDetails.forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      allDetails.forEach(other => {
        // Optimization: Only write to DOM if it's currently open to prevent layout thrashing
        if (other !== item && other.open) other.open = false;
      });
    }
  });
});
