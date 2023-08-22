// document.querySelector("#app").innerHTML = `
//   <div>
//     hello World!
//   </div>
// `;

import Masonry from "masonry-layout";

//1. animated offers
const hiddenElements = document.querySelectorAll(".cards .hide");
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
  fitWidth: true,
});

let msnrGallery = document.getElementById("Msnr");
let msnrBtnOpen = document.getElementById("MsnrBtnOpen");
let msnrBtnClose = document.getElementById("MsnrBtnClose");
let msnrGradient = document.getElementById("MsnrGradient");

msnrBtnOpen.addEventListener("click", () => {
  for (let photoIndex = 1; photoIndex < 10; photoIndex++) {
    let newBrick = document.createElement("div");
    newBrick.classList += "gridMsnr-item gridMsnr-w1 gridMsnr-h3";
    newBrick.innerHTML = `<img src="./src/assets//gallery/GalleryPhoto${photoIndex}.png" alt="Photo${photoIndex}" />`;
    msnrGallery.appendChild(newBrick);
    galleryReel.appended(newBrick);
  }
  msnrBtnOpen;
  popupGallery();

  msnrBtnOpen.style.display = "none";
  msnrBtnClose.style.display = "block";
  msnrGradient.style.display = "none";

  galleryReel.reloadItems();
});
msnrBtnClose.addEventListener("click", () => {
  for (let photoIndex = 1; photoIndex < 10; photoIndex++) {
    msnrGallery.removeChild(msnrGallery.lastChild);
    galleryReel.remove(msnrGallery.lastChild);
  }

  msnrBtnOpen.style.display = "block";
  msnrBtnClose.style.display = "none";
  msnrGradient.style.display = "block";

  galleryReel.reloadItems();
});

//3. popup for Gallery
function popupGallery() {
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
}
popupGallery();

// 4.smooth scroll effect

document.querySelectorAll(".scrollLink").forEach((a) => {
  a.onclick = (e) => {
    let destination = a.getAttribute("href");
    let navElement = document.getElementById(
      destination.slice(1, destination.length).toString()
    );
    e.preventDefault();

    navElement &&
      navElement.scrollIntoView({ behavior: "smooth", block: "center" });
  };
});
// 5.dropDown menu "oferty"

const dropDownBtn = document.querySelector(".dropDownBtn");
const dropDownContent = document.querySelector(".dropDownContent");

dropDownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropDownContent.classList.add("showDropDown");
});
document.documentElement.addEventListener("click", () => {
  if (dropDownContent.classList.contains("showDropDown")) {
    dropDownContent.classList.remove("showDropDown");
  }
});

const searchBtn = document.querySelector(".searchBtn");
const searchContent = document.querySelector(".searchContent");
const searchSubmit = document.getElementById("searchSubmit");

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchContent.classList.add("showDropDown");
});
searchSubmit.addEventListener("click", () => {
  console.log(1);
  if (searchContent.classList.contains("showDropDown")) {
    searchContent.classList.remove("showDropDown");
  }
});

// 6. Hero Slider

let sliderIndex = 1;
let next = document.querySelector(".nextBtn");
let back = document.querySelector(".backBtn");

next.addEventListener("click", () => {
  sliderIndex += 1;
  showSlide();
});

back.addEventListener("click", () => {
  sliderIndex -= 1;
  showSlide(sliderIndex);
});

function showSlide() {
  let slides = document.querySelectorAll(".slide");

  if (sliderIndex > slides.length) {
    sliderIndex = 1;
  }
  if (sliderIndex < 1) {
    sliderIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[sliderIndex - 1].style.display = "block";
}
showSlide();
