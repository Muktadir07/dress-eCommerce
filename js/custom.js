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