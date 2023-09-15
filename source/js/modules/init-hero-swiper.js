import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getHeroSlider = () => {
  if (document.querySelector('[data-hero-slider]')) {
    return new Swiper('[data-hero-slider]', {
      loop: true,
      speed: 300,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      allowTouchMove: isMobileDevice(),
      pagination: {
        el: '[data-hero-pagination]',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="hero__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
        },
      },
    });
  }
  return null;
};

export {getHeroSlider};
