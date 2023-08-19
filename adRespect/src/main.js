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
  };
});
document.querySelector(".popup span").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
});
