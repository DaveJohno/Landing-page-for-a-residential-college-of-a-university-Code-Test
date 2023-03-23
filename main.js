// header
const nav = document.querySelector(".nav-bar");
const navBarItems = document.querySelectorAll(".nav-bar-item");

//get the window viewport width
const render = () => {
  let windowInnerWidth = window.innerWidth;

  if (windowInnerWidth <= 768) {
    renderHeaderMobile();
    renderSlider();
  } else if (windowInnerWidth > 768 && windowInnerWidth <= 960) {
    renderHeaderDesktop();
    renderSlider();
  } else if (windowInnerWidth > 960) {
    renderHeaderDesktop();
    renderSlider();
  }
};

window.addEventListener("resize", () => render());

// nav bar items
import { navItems, sliderImages } from "./data/data.js";

// render mobile
const renderHeaderMobile = () => {
  const header = document.querySelector("header");
  header.innerHTML = "";
  header.classList.add("mobile");

  // create/append the logo
  const navLogo = document.createElement("div");
  navLogo.classList.add("logo", "moblie");
  navLogo.innerText = "RC";
  header.appendChild(navLogo);

  const hamburger = document.createElement("span");
  hamburger.classList.add("material-symbols-outlined", "closed");
  hamburger.innerText = "menu";
  header.appendChild(hamburger);

  const navBarOpenMobileElement = document.createElement("nav");
  navBarOpenMobileElement.classList.add("nav-bar-open-mobile");
  header.appendChild(navBarOpenMobileElement);
  // navBarOpenMobileElement.innerHTML = `dsasd`;

  hamburger.addEventListener("click", (event) => {
    if (hamburger.classList.contains("closed")) {
      hamburger.classList.toggle("closed");
      hamburger.classList.toggle("open");
      hamburger.innerText = "close";
      navBarOpenMobileElement.style.display = "flex";
      navBarOpenMobileElement.innerHTML = "";

      let property = "";

      for (const property in navItems) {
        const navElement = document.createElement("div");
        navBarOpenMobileElement.appendChild(navElement);

        navElement.classList.add("nav-bar-item");
        navElement.innerHTML = `${property} <span class="material-symbols-outlined">
        add
        </span>`;
      }
      const navBarItemsMobile = document.querySelectorAll(".nav-bar-item");

      navBarItemsMobile.forEach((navHeading, index) => {
        navHeading.addEventListener("click", (event) => {
          const openIcon = event.target.querySelector("span");
          if (openIcon.innerText === "add") {
            openIcon.innerText = "remove";
            const currentElement = event.target;
            const childElement = document.createElement("div");
            currentElement.appendChild(childElement);
            childElement.classList.add("nav-bar-item-open");

            if (
              Object.keys(navItems)[index].toLowerCase() ===
              navHeading.innerText.toLocaleLowerCase().split(/\r?\n/)[0]
            ) {
              childElement.innerHTML = navItems[Object.keys(navItems)[index]]
                .map(
                  (item) =>
                    `<a class="nav-link-mobile" href=${item.url}>${item.title} </a>`
                )
                .join("");
            }
          } else {
            openIcon.innerText = "add";
            document.querySelector(".nav-bar-item-open").remove();
          }
        });
      });
    } else if (hamburger.classList.contains("open")) {
      hamburger.classList.toggle("closed");
      hamburger.classList.toggle("open");
      hamburger.innerText = "menu";
      navBarOpenMobileElement.style.display = "none";
    }
  });
};

//render destop header
const renderHeaderDesktop = () => {
  // get the header
  const header = document.querySelector("header");
  header.innerHTML = "";
  header.classList.remove("mobile");

  // create/append the logo
  const navLogo = document.createElement("div");
  navLogo.classList.add("logo");
  navLogo.innerText = "RC";
  header.appendChild(navLogo);

  // create/append the nav bar
  const navBarElement = document.createElement("nav");
  navBarElement.classList.add("nav-bar");
  header.appendChild(navBarElement);

  const searchBarElement = document.createElement("div");

  searchBarElement.innerHTML = `<div class="search-container">
  <input type="text" placeholder="Search..">
  <button type="button"><span class="material-symbols-outlined">search</span></button></div>`;
  header.appendChild(searchBarElement);

  const navBaropenElement = document.createElement("nav");
  navBaropenElement.classList.add("nav-bar-open");
  navBarElement.appendChild(navBaropenElement);

  const navBaropen = document.querySelector(".nav-bar-open");

  // add event listerner add the nav items
  for (const property in navItems) {
    const navElement = document.createElement("div");
    navBarElement.appendChild(navElement);

    navElement.classList.add("nav-bar-item");
    navElement.innerHTML = `${property}`;

    navElement.addEventListener("mouseover", (event) => {
      const navBarElement = event.target;

      if (
        navBarElement.innerText.toLowerCase() === property.toLocaleLowerCase()
      ) {
        const navOpenItem = navItems[`${property}`]
          .map(
            (item) => `<a class="nav-link" href=${item.url}>${item.title} </a>`
          )
          .join("");
        navBaropen.style.display = "grid";
        navBaropen.innerHTML = navOpenItem;
      }
    });

    navBaropen.addEventListener("mouseleave", (event1) => {
      navBarElement.classList.remove("nav-item-active");
      navBaropen.style.display = "none";
    });
  }
};

//render slider
const renderSlider = () => {
  const sliderContainer = document.querySelector(".slideshow-container");

  sliderContainer.innerHTML = sliderImages
    .map(
      (image) =>
        `<div class="mySlides">
    <img class="slider-image" src="${image.url}" alt="${image.alt}">
    </div>`
    )
    .join("");

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
  window.onload = function () {
    setInterval(function () {
      plusSlides(1);
    }, 3000);
  };
};

// renderHeader();
render();
