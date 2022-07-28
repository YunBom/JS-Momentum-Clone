const imges = ["1.webp", "2.webp","3.webp", "4.webp", "5.webp"];
const chosenImage = imges[Math.floor(Math.random()*imges.length)];
const bgImg = document.createElement("img");

bgImg.src= `img/${chosenImage}`;    
console.log(bgImg);

document.body.appendChild(bgImg);



