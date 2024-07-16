window.onload = () => {
  DefaultSwiper = new Swiper(".mainSwiper", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  });

  categorySwiper = new Swiper(".categorySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 8,
      },
    },
  });
};

document.querySelector(".icon-bar").addEventListener("click", () => {
  let nav = document.querySelector(".navbar-mobile ");
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});
