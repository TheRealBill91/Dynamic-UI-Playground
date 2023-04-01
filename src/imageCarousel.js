import "./css/carousel.css";

let counter = 0;

const startImageCarousel = () => {
  const images = document.querySelectorAll(".carouselContainer > div");

  images[counter].style.display = "block";

  const leftBtn = document.querySelector(".leftBtn");
  const rightBtn = document.querySelector(".rightBtn");

  rightBtn.addEventListener("click", movePictureRight);

  const movePictureLeft = () => {
    const currentCounter = counter;
    counter--;
    if (counter < 0) {
      images[currentCounter].style.display = "none";
      counter = images.length - 1;
      images[counter].style.display = "block";
    } else {
      images[currentCounter].style.display = "none";
      images[counter].style.display = "block";
    }
  };

  leftBtn.addEventListener("click", movePictureLeft);

  return { movePictureRight };
};

const movePictureRight = () => {
  const images = document.querySelectorAll(".carouselContainer > div");
  const currentCounter = counter;
  counter++;
  if (counter > images.length - 1) {
    images[currentCounter].style.display = "none";
    counter = 0;
    images[counter].style.display = "block";
  } else {
    images[currentCounter].style.display = "none";
    images[counter].style.display = "block";
  }
};

export { startImageCarousel, movePictureRight };
