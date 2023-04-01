import "./css/normalize.css";
import "./css/style.css";
import "./css/carousel.css";

import { toggleDropDownMenu } from "./toggleDropDownMenu";
import { startImageCarousel, movePictureRight } from "./imageCarousel";

toggleDropDownMenu();
startImageCarousel();
setInterval(movePictureRight, 4000);

