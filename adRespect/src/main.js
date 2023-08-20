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

// document.querySelector(".scrollLink").addEventListener("click", (e) => {
//   let destination = document.querySelector(".scrollLink").getAttribute("href");
//   let navElement = document.getElementById(
//     destination.slice(1, destination.length).toString()
//   );
//   e.preventDefault();
//   navElement &&
//     navElement.scrollIntoView({ behavior: "smooth", block: "start" });
// });

document.querySelectorAll(".scrollLink").forEach((a) => {
  a.onclick = (e) => {
    let destination = a.getAttribute("href");
    let navElement = document.getElementById(
      destination.slice(1, destination.length).toString()
    );
    e.preventDefault();

    navElement &&
      navElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };
});
