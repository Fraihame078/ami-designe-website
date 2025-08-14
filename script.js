/*
 * Основной JavaScript для сайта Ami
 *
 * Управляет раскрытием мобильного меню и
 * интерактивными карточками услуг. Нажатие на
 * иконку «гамбургер» открывает или закрывает меню. При
 * выборе ссылки меню автоматически закрывается. Для карточек
 * услуг добавлено переключение видимости описания и стоимости.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Переключаем мобильное меню
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    // Закрываем меню при выборе пункта
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Переключаем отображение описаний услуг
  const serviceCards = document.querySelectorAll('.service-detail-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
});