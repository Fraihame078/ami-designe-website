/*
 * Basic JavaScript for Ami Designe website
 *
 * Handles responsive navigation toggle for mobile devices. When the hamburger
 * icon is clicked, the navigation menu is shown or hidden. Each link will
 * automatically close the menu once selected.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    // Close the mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
});
