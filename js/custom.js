var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      
    },
    autoplay: {
        delay: 3000,
        loop:true,
      },
  });

var productSwiper =new Swiper(".mySwiperProduct", {
    slidesPerView:5,
    spaceBetween:20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        
})

var productSwiperList =new Swiper(".mySwiperProductList", {
  slidesPerView:5,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween:20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  

      
})



const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 3, // показывать по 3 превью
  spaceBetween: 20, // расстояние между слайдами
  navigation: { // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev' // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: { // условия для разных размеров окна браузера
    0: { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: { // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    }
    
  }
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: { // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev' // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: { // указываем на превью слайдер
    swiper: sliderThumbs // указываем имя превью слайдера
  },
  breakpoints: { // условия для разных размеров окна браузера
    0: { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
    },
    768: { // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    }
  }
});

var $removeItem = $(".btn-remove");
var fadeTime = 300;
$removeItem.on("click", function () {
  var productRow = $(this).parent().parent().parent();
    productRow.slideUp(fadeTime, function() {
    productRow.remove();
    
  });
});