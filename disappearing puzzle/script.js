// script.js
const sliderThumb = document.getElementById("sliderThumb");
const movingElement = document.getElementById("moving_element");
const movingElementPath = document.getElementById("moving_element_path");
const message = document.getElementById("message");

let isMovingElementInvisible = false;

const targetLeft = 150;

let isDragging = false;

sliderThumb.addEventListener("mousedown", (event) => {
  isDragging = true;
  sliderThumb.style.transition = "none";

  const startX = event.clientX;
  const thumbLeft = sliderThumb.getBoundingClientRect().left;

  const startXMovingCircle = event.clientX;
  const movingCircleLeft = movingElement.getBoundingClientRect().left;

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
    movingElement.style.left = `${clampedX}px`;

    let left_movingElement = parseInt(movingElement.style.left);

    if (
      left_movingElement >= targetLeft - 5 &&
      left_movingElement <= targetLeft + 5
    ) {
      console.log(
        ` moving: ${movingElement.style.left} , target: ${targetLeft}`
      );

      movingElementPath.setAttribute("fill-opacity", 0);
      isMovingElementInvisible = true;
    } else if (isMovingElementInvisible) {
      movingElementPath.setAttribute("fill-opacity", 100);
      isMovingElementInvisible = false;
    }
  };
  const onRelease = () => {
    isDragging = false;

    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", onRelease);

    let left_movingElement = parseInt(movingElement.style.left);

    if (
      left_movingElement >= targetLeft - 5 &&
      left_movingElement <= targetLeft + 5
    ) {
      movingElement.remove();
      message.innerHTML = "Captcha Complete!";
    } else {
      message.innerHTML = "Failed, Try again!";
    }

    if (parseInt(movingElement.style.left) >= targetLeft) {
      if (parseInt(movingElement.style.left) <= targetLeft) {
      }
    }
  };

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", onRelease);
});
