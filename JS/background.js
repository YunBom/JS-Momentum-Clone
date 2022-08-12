const images = ["1.webp", "2.webp","3.webp", "4.webp", "5.webp"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.querySelector("body");

console.log(chosenImage);

body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundRepeat= "no-repeat";
body.style.backgroundSize= "100% 100%"
