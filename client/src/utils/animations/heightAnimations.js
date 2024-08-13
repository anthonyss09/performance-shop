const heightFromToRem = (elId, duration, height1, height2) => {
  requestAnimationFrame(animate);
  const start = document.timeline.currentTime;
  const el = document.getElementById(elId);

  function animate() {
    const now = document.timeline.currentTime;
    const delta = (now - start) / duration;
    const height = height1 + (height2 - height1) * delta;
    if (delta < 1) {
      el.style.height = height + "rem";
      requestAnimationFrame(() => {
        animate();
      });
    }
  }
};

const heightFromToPx = (elId, duration, height1, height2) => {
  if (height1 === height2) {
    return;
  }
  requestAnimationFrame(animate);
  const start = Date.now();
  const el = document.getElementById(elId);
  console.log(el);

  function animate() {
    const now = Date.now();
    const delta = (now - start) / duration;
    const height = height1 + (height2 - height1) * delta;
    if (delta < 1) {
      el.style.height = height + "px";
      requestAnimationFrame(() => {
        animate();
      });
    } else {
      el.style.height = height2 + "px";
    }
  }
};

export { heightFromToRem, heightFromToPx };
