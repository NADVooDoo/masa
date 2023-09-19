import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getReviewsSlider = () => {
  const reviewsSlider = document.querySelector('[data-reviews-slider]');
  if (!reviewsSlider) {
    return null;
  }

  const slider = new Swiper(reviewsSlider, {
    allowTouchMove: isMobileDevice(),
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    scrollbar: {
      el: '[data-reviews-scrollbar]',
    },
    navigation: {
      nextEl: '[data-reviews-next]',
      prevEl: '[data-reviews-prev]',
    },
  });

  return slider;
};

export {getReviewsSlider};
