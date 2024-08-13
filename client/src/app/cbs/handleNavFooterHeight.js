import { heightFromToPx } from "../../utils/animations/heightAnimations";
import { fadeFromTo } from "../../utils/animations/opacityAnimations";

const handleNavFooterHeight = (e, navbarHeight, footerHeight, deltaY) => {
  switch (e.type) {
    case "wheel":
      //if scrolling down
      if (e.deltaY > 0) {
        fadeFromTo("nav-main-light", 300, 1, 0);
        fadeFromTo("nav-main-dark", 300, 1, 0);
        navbarHeight.current = 0;
      }
      //if scrolling up
      if (e.deltaY < 0) {
        fadeFromTo("nav-main-light", 300, 0, 1);
        fadeFromTo("nav-main-dark", 300, 0, 1);
        navbarHeight.current = 80;
      }

      break;
    case "keydown":
      //if scrolling down
      if (e.keyCode === 40) {
        fadeFromTo("nav-main-ligh", 300, 1, 0);
        fadeFromTo("nav-main-dark", 300, 1, 0);
        navbarHeight.current = 0;
      }
      //if scrolling up
      if (e.keyCode === 38) {
        fadeFromTo("nav-main-light", 300, 0, 1);
        fadeFromTo("nav-main-dark", 300, 0, 1);
        navbarHeight.current = 80;
      }
      break;
    case "touchend":
      //if scrolling down
      if (deltaY < 0) {
        fadeFromTo("nav-main-light", 300, 1, 0);
        fadeFromTo("nav-main-dark", 300, 1, 0);
        navbarHeight.current = 0;
      }
      //if scrolling up
      if (deltaY > 0) {
        fadeFromTo("nav-main-light", 300, 0, 1);
        fadeFromTo("nav-main-dark", 300, 0, 1);
        navbarHeight.current = 80;
      }
      if (deltaY === 0) {
        return;
      }

      break;
    default:
      break;
  }
};

export { handleNavFooterHeight };
