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
  ⚡ Bolt Optimization:
  1. Dropdown close check: Adding `dropdown.classList.contains('open')` prevents an unnecessary DOM query (`dropdown.querySelector`) and class mutation inside a global click listener, reducing UI thread blocking on every click.
  2. Caching 'details' elements: Caching `document.querySelectorAll('details')` outside the toggle event listener avoids repeated expensive DOM queries across the document when expanding/collapsing FAQ items.
  Expected impact: Reduces DOM queries and improves click responsiveness, especially on mobile or lower-end devices.
*/
document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    if (dropdown.classList.contains('open') && !dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      const toggle = dropdown.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

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
