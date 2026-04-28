const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown ? dropdown.querySelector('.dropdown-toggle') : null;
if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    message.textContent = 'Спасибо! Демонстрационная заявка принята.';
    form.reset();
  });
});
