export default function flashImages() {
  requestAnimationFrame(animate);
  const start = document.timeline.currentTime;

  const imageTwo = document.getElementById("homepage-man-runner-color-image");
  const imageThree = document.getElementById("homepage-man-dribbling-image");
  const imageFour = document.getElementById("homepage-man-runner-dark-image");
  const imageOne = document.getElementById("homepage-woman-runner-image");
  const slogan = document.getElementById("homepage-slogan");
  function animate() {
    const duration = 1400;
    const now = document.timeline.currentTime;
    const delta = (now - start) / duration;
    if (delta < 1.4) {
      if (delta > 0.1) {
        imageTwo.style.zIndex = 5;
        imageTwo.style.visibility = "visible";
        imageOne.style.zIndex = 3;
      }
      if (delta > 0.2) {
        imageTwo.style.zIndex = 3;
        imageThree.style.zIndex = 5;
        imageThree.style.visibility = "visible";
      }
      if (delta > 0.3) {
        imageThree.style.zIndex = 3;
        imageFour.style.zIndex = 5;
        imageFour.style.visibility = "visible";
      }
      if (delta > 0.4) {
        imageFour.style.zIndex = 3;
        imageOne.style.zIndex = 5;
      }
      if (delta > 0.5) {
        imageTwo.style.zIndex = 5;
        imageOne.style.zIndex = 3;
      }
      if (delta > 0.6) {
        imageTwo.style.zIndex = 3;
        imageThree.style.zIndex = 5;
      }
      if (delta > 0.7) {
        imageFour.style.zIndex = 5;
        imageThree.style.zIndex = 3;
      }
      if (delta > 0.8) {
        imageFour.style.zIndex = 3;
        imageOne.style.zIndex = 5;
        slogan.style.transition = "1.5s ease all";
      }
      if (delta > 1.1) {
        slogan.style.opacity = 1;
      }
      if (delta > 1.3) {
        slogan.style.transition = "0.3s ease all";
      }
      requestAnimationFrame(() => {
        animate();
      });
    }
  }
}
