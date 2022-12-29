var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 4,
        spaceBetween: 7
        
      },
      // when window width is >= 480px
      // when window width is >= 640px
      640: {
        slidesPerView: 7,
        spaceBetween: 40,
      }
    },
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
    slidesPerColumn: 3,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: "row",
        },
        
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
        grid: {
          rows: 1,
          fill: "row",
        },
      }
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        
});

var productSwiperList =new Swiper(".mySwiperProductList", {
  slidesPerView:5,
  spaceBetween:20,
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 3,
        fill: "row",
      },
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: "row",
      },
    }
  },
  
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  

      
});



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

var productCarousel =new Swiper(".product-carousel", {
  slidesPerView:4,
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 5,
        fill: "row",
      },
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: "row",
      },
    }
  },
  spaceBetween:20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
      
});


// product filter price range

const rangeInput = document.querySelectorAll(".product-filter .range-input input"),
  priceInput = document.querySelectorAll(".product-filter .price-input input"),
  range = document.querySelector(".product-filter .slider .progress");
let priceGap = 300;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


// Mobile menu search bar

let searchBtn= document.querySelector('.searchBtn');
      let searchBox= document.querySelector('#search-menu');
      let clickBtn= false;
      searchBtn.addEventListener('click', function(){
        if(clickBtn){
        searchBox.classList.add('active');
        }else{
          searchBox.classList.remove('active');
        }
      clickBtn= !clickBtn;

      });


$('.offcanvas-body .sub-menu ul').hide();
$(".offcanvas-body  .sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});