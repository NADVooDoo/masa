import Swiper from '../vendor/swiper';
import {isMobileDevice} from '../utils/is-mobile-device';

const getProgramsSlider = () => {
  if (document.querySelector('[data-programs-slider]')) {
    return new Swiper('[data-programs-slider]', {
      allowTouchMove: isMobileDevice(),
      autoHeight: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      scrollbar: {
        el: '[data-programs-scrollbar]',
      },
      navigation: {
        nextEl: '[data-programs-next]',
        prevEl: '[data-programs-prev]',
      },
    });
  }
  return null;
};

export {getProgramsSlider};
