const images = document.querySelectorAll(".image-container img");
const submitButton = document.getElementById("submit");

let correctAnswer = false;

images.forEach((image) => {
  image.addEventListener("click", () => {
    console.log("cojfepo;jcoepfjpfjep");
    images.forEach((img) => img.classList.remove("selected"));
    image.classList.add("selected");
    correctAnswer = image.getAttribute("data-answer") === "true";
  });
});

submitButton.addEventListener("click", () => {
  if (correctAnswer) {
    alert("Captcha passed! You selected the correct image.");
  } else {
    alert("Captcha failed! Please try again.");
  }
});
