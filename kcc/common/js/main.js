
$(document).ready(function(){
  new Swiper('.swiper-mainVisual', {
    effect: 'fade',
    loop: true,
    speed: 700,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.visual-btn-next',
      prevEl: '.visual-btn-prev',
    }
  });

  new Swiper('.swiper-MainProduct', {
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
      nextEl: '.product-btn-next',
      prevEl: '.product-btn-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      766: {
        slidesPerView: 1
      }
    }
  });
})
