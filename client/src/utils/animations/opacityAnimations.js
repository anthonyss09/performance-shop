const fadeFromTo = (elId, duration, opacity1, opacity2) => {
  requestAnimationFrame(animate);
  const start = Date.now();
  const el = document.getElementById(elId);

  function animate() {
    const now = Date.now();
    const delta = (now - start) / duration;
    const opacity = opacity1 + (opacity2 - opacity1) * delta;
    if (delta < 1) {
      el.style.opacity = opacity;
      requestAnimationFrame(() => {
        animate();
      });
    }
  }
};

const fadeInElement = (targetId, duration) => {
  requestAnimationFrame(animate);
  const start = Date.now();

  function animate() {
    const now = Date.now();
    const element = document.getElementById(targetId);
    const delta = (now - start) / duration;
    if (delta < 1) {
      element.style.opacity = delta;
      requestAnimationFrame(() => {
        animate();
      });
    } else {
      element.style.opacity = 1;
      return;
    }
  }
};

const fadeOutElement = (targetId, duration) => {
  requestAnimationFrame(animate);
  const start = document.timeline.currentTime;

  function animate() {
    const now = document.timeline.currentTime;
    const element = document.getElementById(targetId);
    const delta = (duration - (now - start)) / duration;
    if (delta > 0) {
      element.style.opacity = delta;
      requestAnimationFrame(() => {
        animate();
      });
    } else {
      element.style.opacity = 0;
      return;
    }
  }
};

const opacityOnScrollDown = (windowPosition) => {
  switch (windowPosition) {
    case 1:
      fadeOutElement("background-1", 1000);
      fadeInElement("background-2", 1000);
      fadeInElement("image-blue-sphere-b2-1", 1000);
      break;
    case 2:
      fadeOutElement("image-blue-sphere-b2-1", 500);
      fadeInElement("blocks-back-b2", 1000);
      fadeInElement("image-blue-sphere-b2-2", 1000);
      break;
    case 3:
      fadeInElement("background-4", 1000);
      fadeOutElement("blocks-back-b2", 1000);
      fadeOutElement("image-blue-sphere-b2-2", 1000);
      break;
    case 4:
      fadeInElement("background-5", 1000);
      fadeOutElement("background-4", 1000);
      fadeInElement("image-blue-sphere-b4-2", 1000);
      fadeInElement("p-b4-1", 1000);
      fadeOutElement("image-blue-sphere-b4-1", 1000);
      break;
    default:
      break;
  }
};

const opacityOnScrollUp = (windowPosition) => {
  switch (windowPosition) {
    case 2:
      fadeInElement("background-1", 1000);
      fadeOutElement("background-2", 1000);
      fadeOutElement("image-blue-sphere-b2-1", 1000);
      break;
    case 3:
      fadeInElement("image-blue-sphere-b2-1", 500);
      fadeOutElement("blocks-back-b2", 1000);
      fadeOutElement("image-blue-sphere-b2-2", 1000);
      break;
    case 4:
      fadeOutElement("background-4", 1000);
      fadeInElement("blocks-back-b2", 1000);
      fadeInElement("image-blue-sphere-b2-2", 1000);
      break;
    case 5:
      fadeInElement("background-4", 1000);
      fadeOutElement("background-5", 1000);
      fadeInElement("image-blue-sphere-b4-1", 1000);
      fadeOutElement("image-blue-sphere-b4-2", 1000);
      fadeOutElement("p-b4-1", 1000);
      break;
    default:
      break;
  }
};

export {
  fadeFromTo,
  fadeInElement,
  fadeOutElement,
  opacityOnScrollDown,
  opacityOnScrollUp,
};
