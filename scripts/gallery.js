const photos = [
  { full: "images/japanese-gardens.HEIC", alt: "Japanese Gardens" },
  { full: "images/fire.HEIC", alt: "Fire" },
  { full: "images/green-sunset.HEIC", alt: "Green Sunset" },
  { full: "images/cornell-flowers.HEIC", alt: "Cornell in Spring" },
  { full: "images/bee-flower.HEIC", alt: "Bee on Flower" },
  { full: "images/beach-sunglasses.HEIC", alt: "Beach Sunglasses" },
  { full: "images/mountain.HEIC", alt: "Snowy Mountain" },
  { full: "images/butterfly-garden.HEIC", alt: "Butterfly Garden" },
  { full: "images/window-golden-hr.HEIC", alt: "Golden Hour Window" },
  { full: "images/cat-sunset.jpg", alt: "Cat Sunset" },
];

const slidesTrack = document.getElementById("slides");
let currIdx = 0;

photos.forEach((photo) => {
  slidesTrack.innerHTML += `<div class="slide"><img src="${photo.full}" alt="${photo.alt}"></div>`;
});

for (let i = 0; i < 3; i++) {
  const clone = slidesTrack.children[i].cloneNode(true);
  slidesTrack.appendChild(clone);
}

const totalSlides = slidesTrack.children.length;

function scrollSlides(direction = 1) {
  const slide = slidesTrack.querySelector(".slide");
  const slideWidth = slide.offsetWidth + 20;
  currIdx += direction;

  slidesTrack.style.transition = "transform 0.5s ease-in-out";
  slidesTrack.style.transform = `translateX(-${currIdx * slideWidth}px)`;

  if (currIdx == totalSlides - 3) {
    setTimeout(() => {
      slidesTrack.style.transition = "none";
      currIdx = 0;
      slidesTrack.style.transform = `translateX(-${currIdx * slideWidth}px)`;
    }, 500);
  }
}

setInterval(() => {
  scrollSlides(1);
}, 3000);
