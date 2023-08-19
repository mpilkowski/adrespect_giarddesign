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
