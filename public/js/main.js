import $ from 'jquery'

/* Preloader */
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  const preloader = document.querySelector("#preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 200);

  /* Featured Products */
  const featuredControls = document.querySelectorAll(".featured__controls li");
  featuredControls.forEach(function (control) {
    control.addEventListener("click", function () {
      featuredControls.forEach(function (control) {
        control.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  const containerEl = document.querySelector(".featured__filter");
  if (containerEl) {
    const mixer = mixitup(containerEl);
  }
});

/* Background Set */
const setBg = document.querySelectorAll(".set-bg");
setBg.forEach(function (bg) {
  const bgUrl = bg.dataset.setbg;
  bg.style.backgroundImage = url({ bgUrl });
});

/* Hamburger Menu */
const hamburgerOpen = document.querySelector(".hamburger__open");
hamburgerOpen.addEventListener("click", function () {
  const hamburgerMenuWrapper = document.querySelector(
    ".hamburger__menu__wrapper"
  );
  hamburgerMenuWrapper.classList.add("show__hamburger__menu__wrapper");
  const hamburgerMenuOverlay = document.querySelector(
    ".hamburger__menu__overlay"
  );
  hamburgerMenuOverlay.classList.add("active");
  document.body.classList.add("over_hid");
});

const hamburgerMenuOverlay = document.querySelector(
  ".hamburger__menu__overlay"
);
hamburgerMenuOverlay.addEventListener("click", function () {
  const hamburgerMenuWrapper = document.querySelector(
    ".hamburger__menu__wrapper"
  );
  hamburgerMenuWrapper.classList.remove("show__hamburger__menu__wrapper");
  this.classList.remove("active");
  document.body.classList.remove("over_hid");
});

/* Navigation */
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuWrap = document.querySelector("#mobile-menu-wrap");
mobileMenu.slicknav({
  prependTo: mobileMenuWrap,
  allowParentLinks: true,
});

/* Categories Slider */
const categoriesSlider = document.querySelector(".categories__slider");
const owl = $(categoriesSlider).owlCarousel({
  loop: true,
  margin: 0,
  items: 4,
  dots: false,
  nav: true,
  navText: [
    "<span class='fa fa-angle-left'><span/>",
    "<span class='fa fa-angle-right'><span/>",
  ], // left and right arrow
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});

/* Hero Categories All */
const heroCategoriesAll = document.querySelector(".hero__categories__all");
heroCategoriesAll.addEventListener("click", function () {
  const heroCategoriesUl = document.querySelector(".hero__categories ul");
  heroCategoriesUl.style.display === "block"
    ? (heroCategoriesUl.style.display = "none")
    : (heroCategoriesUl.style.display = "block");
});

/* Latest Products Slider */
const latestProductSlider = document.querySelector(".latest-product__slider");
latestProductSlider.classList.add("owl-carousel");
$(".latest-product__slider").owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: false,
  nav: true,
  navText: [
    "<span class='fa fa-angle-left'><span/>",
    "<span class='fa fa-angle-right'><span/>",
  ],
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
});

const productDiscountSlider = document.querySelector(
  ".product__discount__slider"
);
if (productDiscountSlider) {
  const productDiscountSliderOptions = {
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      320: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  const productDiscountSliderInstance = new OwlCarousel(
    productDiscountSlider,
    productDiscountSliderOptions
  );
}

const productDetailsPicSlider = document.querySelector(
  ".product__details__pic__slider"
);
if (productDetailsPicSlider) {
  const productDetailsPicSliderOptions = {
    loop: true,
    margin: 20,
    items: 4,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  };
  const productDetailsPicSliderInstance = new OwlCarousel(
    productDetailsPicSlider,
    productDetailsPicSliderOptions
  );
}

/* SLIDER */
/* Price Range Slider */
const rangeSlider = document.querySelector(".price-range");
const minamount = document.querySelector("#minamount");
const maxamount = document.querySelector("#maxamount");
const minPrice = rangeSlider.dataset.min;
const maxPrice = rangeSlider.dataset.max;

rangeSlider.addEventListener("input", function (e) {
  minamount.value = "$" + e.target.value[0];
  maxamount.value = "$" + e.target.value[1];
});
minamount.value = "$" + minPrice;
maxamount.value = "$" + maxPrice;
/* (Nice) Select */
const select = document.querySelectorAll("select");
select.forEach((item) => {
  item.classList.add("nice-select");
});

/* Single Product */
const productDetailsPicSliderImg = document.querySelectorAll(
  ".product__details__pic__slider img"
);
productDetailsPicSliderImg.forEach(function (img) {
  img.addEventListener("click", function () {
    const imgurl = this.dataset.imgbigurl;
    const bigImg = document
      .querySelector(".product__details__pic__item--large")
      .getAttribute("src");
    if (imgurl != bigImg) {
      document
        .querySelector(".product__details__pic__item--large")
        .setAttribute("src", imgurl);
    }
  });
});

/* Quantity change */
const proQty = document.querySelectorAll(".pro-qty");
proQty.forEach(function (element) {
  element.insertAdjacentHTML("afterbegin", '<span class="dec qtybtn">-</span>'); // - sign
  element.insertAdjacentHTML("beforeend", '<span class="inc qtybtn">+</span>'); // + sign
});

proQty.forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (event.target.classList.contains("qtybtn")) {
      const button = event.target;
      const input = button.parentNode.querySelector("input");
      let oldValue = parseFloat(input.value);
      if (button.classList.contains("inc")) {
        let newVal = oldValue + 1;
        input.value = newVal;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          let newVal = oldValue - 1;
          input.value = newVal;
        } else {
          input.value = 0;
        }
      }
    }
  });
});
