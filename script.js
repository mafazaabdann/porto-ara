const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Menutup menu setelah item diklik dan melakukan smooth scroll
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
