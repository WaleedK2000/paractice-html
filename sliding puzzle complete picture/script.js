// script.js
const sliderThumb = document.getElementById("sliderThumb");
const movingElement = document.getElementById("moving_element");
const target = document.getElementById("target");

target.style.left = `${1}px`;

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

    console.log("ff ", movingElement.style.left, "cc ", target.style.left);

    // if (movingElement.style.left <= target.style.left) {
    //   console.log("HELELELEO");
    //   movingElement.innerHTML = "h";
    // }
  };

  const onRelease = () => {
    isDragging = false;
    sliderThumb.style.transition = "left 0.3s";

    movingElement.style.transition = "left 0.3s";

    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", onRelease);

    // Simulate a captcha verification process
    // setTimeout(() => {
    //   // Refresh the page while retaining the slider's position
    //   window.location.reload();
    // }, 500);

    // && (movingElement.style.left <= target.style.left + 10) )

    if (
      parseInt(movingElement.style.left) - 50 >=
      parseInt(target.style.left)
    ) {
      if (
        parseInt(movingElement.style.left) - 55 <=
        parseInt(target.style.left)
      ) {
        console.log(
          ` moving: ${movingElement.style.left} , target: ${target.style.left}`
        );

        target.remove();
        movingElement.remove();
      }

      // console.log(" TO TOTOG KTOGPKT OKG TGK TGK");
    }
  };

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", onRelease);
});
