var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 50,
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
    slidesPerView:4,
    spaceBetween:30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        
})