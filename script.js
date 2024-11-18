
const slideProdutos = new Swiper('.swiperProdutos', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  // pagination: {
  //     el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  centeredSlidesBounds: true,
  effect: "coverflow"
});

var paginatioBlo = new Swiper(".swiperBlog", {
  grabCursor: true,
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const buttonReadme = document.querySelector(".xique-button")
const modal = document.querySelector("dialog")
const buttonCloseModal = document.querySelector("dialog button")


buttonReadme.addEventListener("click", (e) => {
  modal.show()
  console.log(e)
});

buttonCloseModal.addEventListener("click", (e) => {
  console.log(e)
  modal.close()
});
