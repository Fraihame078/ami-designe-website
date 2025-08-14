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

  // Обработка заявки на обратный звонок
  // Когда посетитель отправляет форму, открываем почтовый клиент с предзаполненным
  // письмом на адрес дизайнера. В письме передаём имя и телефон клиента.
  const callbackForm = document.getElementById('callbackForm');
  const callbackMsg  = document.getElementById('callbackMsg');
  if (callbackForm) {
    callbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name  = document.getElementById('callbackName').value.trim();
      const phone = document.getElementById('callbackPhone').value.trim();
      if (!name || !phone) {
        callbackMsg.textContent = 'Пожалуйста, заполните все поля.';
        return;
      }
      // Формируем ссылку mailto с кодировкой темы и тела письма
      const subject = encodeURIComponent('Запрос обратного звонка');
      const body    = encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}`);
      const mailtoLink = `mailto:wez1234567890@yandex.ru?subject=${subject}&body=${body}`;
      // Открываем почтовый клиент пользователя
      window.location.href = mailtoLink;
      // Показываем уведомление на сайте
      callbackMsg.textContent = 'Спасибо! Ваш запрос на звонок отправлен.';
      // Очищаем форму
      callbackForm.reset();
    });
  }
});