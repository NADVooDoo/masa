import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getNewsSlider = () => {
  if (document.querySelector('[data-news-slider]')) {
    return new Swiper('[data-news-slider]', {
      allowTouchMove: isMobileDevice(),
      updateOnWindowResize: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
        },
      },
      navigation: {
        nextEl: '[data-news-next]',
        prevEl: '[data-news-prev]',
      },
      pagination: {
        bulletActiveClass: 'news__pagination-bullet-active',
        el: '[data-news-pagination]',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="news__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
        },
      },
    });
  }
  return null;
};

export {getNewsSlider};
