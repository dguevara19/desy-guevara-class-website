const button = document.querySelector("#button");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");

function changeImage1() {
  image1.src = "plush.png"
}

function changeImage2() {
  image2.src = "still.png";
}

button.addEventListener("click", changeImage1);
button.addEventListener("click", changeImage2);
button.style.backgroundColor = "pink";
