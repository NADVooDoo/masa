const getNewsMenuSelection = () => {
  const ACTIVE_CLASS = 'is-active';
  const menu = document.querySelector('[data-news-menu]');
  const buttons = menu.querySelectorAll('[data-news-menu-button]');

  menu.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('news__menu-button')) {
      buttons.forEach((button) => button.classList.remove(ACTIVE_CLASS));
      evt.target.classList.add(ACTIVE_CLASS);
    }
  });
};

export {getNewsMenuSelection};
