// script.js
const sliderThumb = document.getElementById("sliderThumb");
const movingCircle = document.getElementById("moving_circle");
let isDragging = false;

sliderThumb.addEventListener("mousedown", (event) => {
  isDragging = true;
  sliderThumb.style.transition = "none";

  const startX = event.clientX;
  const thumbLeft = sliderThumb.getBoundingClientRect().left;

  const startXMovingCircle = event.clientX;
  const movingCircleLeft = movingCircle.getBoundingClientRect().left;

  const offsetX = startX - thumbLeft;

  const offsetXMovingCircle = startXMovingCircle - movingCircleLeft;

  const onDrag = (event) => {
    if (!isDragging) return;

    const newX = event.clientX - offsetX;
    const trackLeft = sliderThumb.parentElement.getBoundingClientRect().left;
    const trackWidth =
      sliderThumb.parentElement.offsetWidth - sliderThumb.offsetWidth;

    const clampedX = Math.max(Math.min(newX - trackLeft, trackWidth), 0);
    sliderThumb.style.left = `${clampedX}px`;
    movingCircle.style.left = `${clampedX}px`;
  };

  const onRelease = () => {
    isDragging = false;
    sliderThumb.style.transition = "left 0.3s";

    movingCircle.style.transition = "left 0.3s";

    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", onRelease);

    // Simulate a captcha verification process
    setTimeout(() => {
      // Refresh the page while retaining the slider's position
      window.location.reload();
    }, 500);
  };

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", onRelease);
});
