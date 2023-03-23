// header
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav-bar");
console.log(logo);

// window.addEventListener("scroll", () => {
//   header.classList.toggle(
//     "sticky",
//     window.scrollY > (window.innerHeight / 10) * 5
//   );
//   logo.classList.toggle(
//     "sticky",
//     window.scrollY > (window.innerHeight / 10) * 5
//   );
//   nav.classList.toggle(
//     "sticky",
//     window.scrollY > (window.innerHeight / 10) * 5
//   );
// });

// window.addEventListener("scroll", () => {
//   nav.classList.toggle(
//     "background",
//     window.scrollY > (window.innerHeight / 10) * 4.5
//   );
// });

// nav bar open
const navOpenList = [
  {
    study: [
      "Study options",
      "Courses",
      "Undergraduate",
      "Postgraduate",
      "Research Degrees",
      "Pathway Courses",
      "Bespoke Courses",
      "Cross-institutional Study",
      "Single Unit Study",
      "Short Courses",
    ],
  },
  {
    "campus life": [
      "UNE Armidale",
      " Parking",
      "Campus Maps",
      "Restaurant and Cafes",
      "Safety, Security and Information",
      "Sport and Fitness",
      "Acknowledgement of Country",
      "Child Care",
      "Booloominbah Historic House",
      "2021 Storm Recovery",
      "Armidale Life",
    ],
  },
  {
    about: [
      "Our Values and Culture",
      "Madgwick and his Legacy",
      " UNE Origins",
      "UNE Vice Chancellors — Past and Present",
      "Governance",
      "Academic Board",
      "Academic Board Committees",
      "Internal Audit",
      "Director of Governance and University Secretary",
      "Legal Services",
      "Records Policy and Governance Unit",
      "Compliance",
      "Contract Management",
      "Delegations Register",
      "Policies",
      "Privacy",
      "Records Management at UNE",
      "Right to Information (GIPA)",
      "UNE Council",
      "University Secretariat",
      "UNE Organisational Chart",
    ],
  },
];

const navBarItems = document.querySelectorAll(".nav-bar-item");
const navBaropen = document.querySelector(".nav-bar-open");

navBarItems.forEach((item, i, navItems) => {
  console.log(item.innerText.toLowerCase());
  const innerHTML = navOpenList[i][Object.keys(navOpenList[i])]
    .map(
      (item) =>
        `<a class="nav-link" href="https://www.w3schools.com">${item} </a>`
    )
    .join("");

  // for (const prop in navOpenList) {
  //   console.log(Object.keys(navOpenList[i]));
  // }

  item.addEventListener("mouseover", (event) => {
    if (event.target.innerText.toLowerCase() === item.innerText.toLowerCase()) {
      navBaropen.style.display = "grid";
      navBaropen.innerHTML = innerHTML;
    } else {
      console.log("nope");
      navBaropen.style.display = "none";
    }
  });

  navBaropen.addEventListener("mouseleave", (event) => {
    navBaropen.style.display = "none";
  });
});

console.log(navBarItems);
