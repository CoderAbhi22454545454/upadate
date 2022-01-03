var swiper0 = new Swiper(".swiper-container.zero", {
  pagination: ".swiper-pagination",
  paginationClickable: true,

  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",

  spaceBetween: 120,

  breakpoints: {
    950: {
      spaceBetween: 200,
    },
  },
});

var swiper = new Swiper(".swiper-container.two", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",

  spaceBetween: 10,
  initialSlide: 1,

  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  centeredSlides: true,
  AbortController: 2,

  coverflow: {
    rotate: 0,
    stretch: 30,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },

  breakpoints: {
    effect: "cover",
    900: {
      spaceBetween: 100,
      initialSlide: 2,
      slidesPerView: "auto",
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 20,
        modifier: 4,
        slideShadows: false,
      },
    },


    650: {
      spaceBetween: 50,
      initialSlide: 1,
    },
    530: {
      spaceBetween: 30,
      initialSlide: 1,

      coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      },
    },
  },
});

var swiper2 = new Swiper(".swiper-container.three", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 1,

  initialSlide: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  centeredSlides: false,
  pagination: ".swiper-pagination",
  paginationClickable: true,

  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    1000: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: true,
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 100,
      slidesPerGroup: 2,
      centeredSlides: true,
    },
    630: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: true,
    },
  },
});

var swiper = new Swiper(".swiper-container.four", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  loop: false,
  centeredSlides: true,
  slidesPerView: 1.8,

  spaceBetween: 60,
  initialSlide: 1,

  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  centeredSlides: true,
  AbortController: 2,

  coverflow: {
    rotate: 0,
    stretch: 120,
    depth: 150,
    modifier: 1.6,
    slideShadows: false,
  },

  breakpoints: {
    824: {
      coverflow: {
        rotate: 0,
        stretch: 10,
        depth: 10,
        modifier: 1.6,
        slideShadows: false,
      },
    },
    624: {
      coverflow: {
        rotate: 0,
        stretch: 20,
        depth: 100,
        modifier: 1.6,
        slideShadows: false,
      },
    },
    500: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      coverflow: {
        rotate: 0,
        stretch: 50,
        depth: 10,
        modifier: 1.6,
        slideShadows: false,
      },
    },
  },
});
var swiper = new Swiper(".swiper-container.five", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 3,
  // loop: true,
  loopFillGroupWithBlank: true,
  pagination: ".swiper-pagination",
  paginationClickable: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
});




var swiper = new Swiper(".swiper-container.ten", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  loop: false,
  centeredSlides: true,
  slidesPerView: 2,

  spaceBetween: 100,
  initialSlide: 2,

  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  centeredSlides: true,
  AbortController: 2,

  coverflow: {
    rotate: 0,
    stretch: 10,
    depth: 150,
    modifier: 2,
    slideShadows: false,
  },

  breakpoints: {
    824: {
      coverflow: {
        rotate: 0,
        stretch: 10,
        depth: 10,
        modifier: 1.6,
        slideShadows: false,
      },
    },
    624: {
      coverflow: {
        rotate: 0,
        stretch: 20,
        depth: 100,
        modifier: 1.6,
        slideShadows: false,
      },
    },
    500: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      coverflow: {
        rotate: 0,
        stretch: 50,
        depth: 10,
        modifier: 1.6,
        slideShadows: false,
      },
    },
  },
});