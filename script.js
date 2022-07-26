const images = [
  "https://picsum.photos/id/230/1920/1080",
  "https://picsum.photos/id/231/1920/1080",
  "https://picsum.photos/id/232/1920/1080",
  "https://picsum.photos/id/233/1920/1080",
  "https://picsum.photos/id/234/1920/1080",
  "https://picsum.photos/id/235/1920/1080",
  "https://picsum.photos/id/236/1920/1080",
  "https://picsum.photos/id/237/1920/1080",
  "https://picsum.photos/id/238/1920/1080",
  "https://picsum.photos/id/239/1920/1080",
  "https://picsum.photos/id/240/1920/1080",
  "https://picsum.photos/id/241/1920/1080",
  "https://picsum.photos/id/242/1920/1080",
  "https://picsum.photos/id/243/1920/1080",
  "https://picsum.photos/id/244/1920/1080",
  "https://picsum.photos/id/247/1920/1080",
  "https://picsum.photos/id/248/1920/1080",
  "https://picsum.photos/id/249/1920/1080",
  "https://picsum.photos/id/250/1920/1080",
  "https://picsum.photos/id/243/1920/1080",
];

const gallery = document.querySelector(".gallery");

const galleryView = function () {
  gallery.innerHTML = "";
  images.forEach(function (img, i) {
    const html = `<div class='photos modal-img imgWidth'><img src=${img} alt='photos' class='photo'/></div>`;
    gallery.insertAdjacentHTML("afterend", html);
  });
};

galleryView();

const photos = document.querySelector(".photos");
const modal = document.querySelector(".modal");

window.addEventListener("DOMContentLoaded", (event) => {
  var x = document.querySelectorAll(".photo");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
      modal.classList.remove("hidden");
      const modalImg = `<img src='${this.src}' class='modal-img' />`;
      modal.insertAdjacentHTML("afterbegin", modalImg);
    });
  }
});

modal.addEventListener("click", function () {
  modal.classList.add("hidden");
  modal.innerHTML = "";
});

function switchMode() {
  var dark = document.body;
  dark.classList.toggle("darkMode");
}
