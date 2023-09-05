function getRandomBetween(min, max) {
  // Generate a random number between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
}

const submitButton = document.getElementById("submit");

let correctAnswer = false;

let catImages = ["cat/1.jpg", "cat/2.jpg", "cat/3.jpg"];
let dogImages = ["dog/1.jpg", "dog/2.jpg", "dog/3.jpg"];
let busImages = ["bus/1.jpg", "bus/2.jpg", "bus/3.jpg"];
let carImages = ["car/1.jpg", "car/2.jpg", "car/3.jpg"];

let correctCaptcha = Math.floor(Math.random() * 4);

if (correctCaptcha === 0) {
  document.getElementById("select").innerHTML = "Cat";
} else if (correctCaptcha === 1) {
  document.getElementById("select").innerHTML = "Dog";
} else if (correctCaptcha === 2) {
  document.getElementById("select").innerHTML = "Bus";
} else {
  document.getElementById("select").innerHTML = "Car";
}

let picArray = [];
// Select random  for each category
picArray.push(catImages[getRandomBetween(0, catImages.length)]);
picArray.push(dogImages[getRandomBetween(0, dogImages.length)]);
picArray.push(busImages[getRandomBetween(0, busImages.length)]);
picArray.push(carImages[getRandomBetween(0, carImages.length)]);

let imgArray = [];

const imgContainer = document.getElementById("image-container");
for (let i = 0; i < 4; i++) {
  const img = document.createElement("img");

  img.src = picArray[i];

  if (i == correctCaptcha) {
    img.setAttribute("data-answer", "true");
  }
  imgContainer.appendChild(img);
}

// document.getElementById("select").innerHTML = "Dog";

const images = document.querySelectorAll(".image-container img");

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
