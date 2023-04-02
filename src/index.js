import "./css/normalize.css";
import "./css/style.css";
import "./css/carousel.css";

import { toggleDropDownMenu } from "./toggleDropDownMenu";
import { startImageCarousel, movePictureRight, changeCurrentImageByDotClick } from "./imageCarousel";

toggleDropDownMenu();
startImageCarousel();
changeCurrentImageByDotClick();
setInterval(movePictureRight, 4000);

