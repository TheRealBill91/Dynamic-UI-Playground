import "./css/carousel.css";

let counter = 0;

const startImageCarousel = () => {
  const images = document.querySelectorAll(".carouselContainer > div");
  const navDots = document.querySelectorAll(".navDots > button");

  // set initial image and nav dot indicator
  navDots[counter].style.backgroundColor = "#44444475";
    images[counter].style.display = "flex";

  const leftBtn = document.querySelector(".leftBtn");
  const rightBtn = document.querySelector(".rightBtn");

  rightBtn.addEventListener("click", movePictureRight);

  const movePictureLeft = () => {
    const currentCounter = counter;
    counter--;
    if (counter < 0) {
      // make the prior image invisible and the nav dot inactive
      navDots[currentCounter].style.backgroundColor = "white";
      images[currentCounter].style.display = "none";
      counter = images.length - 1;
      // make the current image visible and set the nav dot indicator
      images[counter].style.display = "flex";
      navDots[counter].style.backgroundColor = "#44444475";
    } else {
      // make the prior image invisible and the nav dot inactive
      navDots[currentCounter].style.backgroundColor = "white";
      images[currentCounter].style.display = "none";
      // make the current image visible and set the nav dot indicator
      images[counter].style.display = "flex";
      navDots[counter].style.backgroundColor = "#44444475";
    }
  };

  leftBtn.addEventListener("click", movePictureLeft);

  return { movePictureRight };
};

const movePictureRight = () => {
  const images = document.querySelectorAll(".carouselContainer > div");
  const navDots = document.querySelectorAll(".navDots > button");
  const currentCounter = counter;
  counter++;
  if (counter > images.length - 1) {
    // make the prior image invisible and the nav dot inactive
    images[currentCounter].style.display = "none";
    navDots[currentCounter].style.backgroundColor = "white";
    counter = 0;
    // make the current image visible and set the nav dot indicator
    images[counter].style.display = "flex";
    navDots[counter].style.backgroundColor = "#44444475";
  } else {
    // make the prior image invisible and the nav dot inactive
    images[currentCounter].style.display = "none";
    navDots[currentCounter].style.backgroundColor = "white";
    // make the current image visible and set the nav dot indicator
    images[counter].style.display = "flex";
    navDots[counter].style.backgroundColor = "#44444475";
  }
};

const changeCurrentImageByDotClick = () => {
  const navDots = document.querySelectorAll(".navDots > button");
  const images = document.querySelectorAll(".carouselContainer > div");
  navDots.forEach((navDot) =>
    navDot.addEventListener("click", () => {
      const currentCounter = counter;
      images[currentCounter].style.display = "none";
      navDots[currentCounter].style.backgroundColor = "white";
      counter = +navDot.dataset.index;
      images[counter].style.display = "flex";
      navDots[counter].style.backgroundColor = "#44444475";
    })
  );
};

export { startImageCarousel, movePictureRight, changeCurrentImageByDotClick };
