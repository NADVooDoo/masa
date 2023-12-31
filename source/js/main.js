import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {Menu} from './modules/menu';
import {getHeroSlider} from './modules/init-hero-swiper';
import {getProgramsSlider} from './modules/init-programs-swiper';
import {getNewsSlider} from './modules/init-news-swiper';
import {getNewsMenuSelection} from './modules/news/menu-news';
import {initAccordions} from './modules/init-faq-tabs';
import {getReviewsSlider} from './modules/init-reviews-swiper';
import {getMap} from './modules/init-contacts-map';
import {CustomSelect} from './vendor/select/custom-select';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const menu = new Menu();
  menu.init();
  getHeroSlider();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const select = new CustomSelect();
    select.init();
    getProgramsSlider();
    getNewsMenuSelection();
    getNewsSlider();
    initAccordions();
    getReviewsSlider();
    getMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
