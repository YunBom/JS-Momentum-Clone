const images = ["1.jpg", "2.jpg","3.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.querySelector("body");

console.log(chosenImage);

background = body.style.backgroundImage;
body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundRepeat= "no-repeat";
body.style.backgroundSize= "100% 100%"

