const button = document.querysSelector("#button");
const message = document.querySelector("#message");

function changeMessage () {
  message.textContent = "you clicked the button!"
}
button.addEventListener("click", changeMessage
