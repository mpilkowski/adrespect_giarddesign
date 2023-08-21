// document.querySelector("#app").innerHTML = `
//   <div>
//     hello World!
//   </div>
// `;

import Masonry from "masonry-layout";

//1. animated offers
const hiddenElements = document.querySelectorAll(".hide");
const observer = new IntersectionObserver((element) => {
  element.forEach((enter) => {
    if (enter.isIntersecting) {
      enter.target.classList.add("show");
    } else {
      enter.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((e) => observer.observe(e));
//2. Gallery with masonry

let gallery = document.querySelector(".gridMsnr");
let galleryReel = new Masonry(gallery, {
  itemSelector: ".gridMsnr-item",
  columnWidth: 451,
  gutter: 43,
  horizontalOrder: true,
});

//3. popup Gallery
document.querySelectorAll(".gridMsnr .gridMsnr-item img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".popup").style.display = "block";
    document.querySelector(".popup img").src = img.getAttribute("src");
    document.getElementById("Navi").style.position = "unset";
  };
});
document.querySelector(".popup span").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
  document.getElementById("Navi").style.position = "sticky";
});

// 4.smooth scroll effect

// document.querySelectorAll(".scrollLink").forEach((a) => {
//   a.onclick = (e) => {
//     let destination = a.getAttribute("href");
//     let navElement = document.getElementById(
//       destination.slice(1, destination.length).toString()
//     );
//     e.preventDefault();

//     navElement &&
//       navElement.scrollIntoView({ behavior: "smooth", block: "center" });
//   };
// });
// 5.dropDown menu "oferty"

// document.querySelector(".dropDownBtn").addEventListener("click", () => {
//   document.querySelector(".dropDownContent").classList.toggle("showDropDown");
// });
// document.documentElement.addEventListener("click", () => {
//   if (
//     document
//       .querySelector(".dropDownContent")
//       .classList.contains("showDropDown")
//   ) {
//     document.querySelector(".dropDownContent").style.display = "none";
//   }
// });

// window.onclick = () => {
//   if (document.querySelector(".dropDownContent").style.display === "block") {
//     document.querySelector(".dropDownContent").style.display = "none";
//   }
// };

const dropDownBtn = document.querySelector(".dropDownBtn");
const dropDownContent = document.querySelector(".dropDownContent");
const openDropDown = () => {
  dropDownContent.classList.toggle("showDropDown");
  console.log("boom");
};

dropDownBtn.addEventListener("click", openDropDown());
document.documentElement.addEventListener("click", () => {
  if (dropDownContent.classList.contains("showDropDown")) {
    openDropDown();
  }
});
// const dropdownBtn = document.getElementById("btn");
// const dropdownMenu = document.getElementById("dropdown");
// const toggleArrow = document.getElementById("arrow");

// const toggleDropdown = function () {
//   dropdownMenu.classList.toggle("show");
//   toggleArrow.classList.toggle("arrow");
// };

// dropdownBtn.addEventListener("click", function (e) {
//   // e.stopPropagation();
//   toggleDropdown();
// });

// document.documentElement.addEventListener("click", function () {
//   if (dropdownMenu.classList.contains("show")) {
//     toggleDropdown();
//   }
// });

// document.querySelector(".dropDownBtn").addEventListener("click", () => {
//   document.querySelector(".dropDownContent").style.display = "block";
// });
// document.documentElement.addEventListener("click", () => {
//   if (document.querySelector(".dropDownContent").style.display === "block") {
//     document.querySelector(".dropDownContent").style.display = "none";
//   }
// });
