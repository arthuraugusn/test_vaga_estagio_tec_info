document.addEventListener("DOMContentLoaded", () => {
  var btn = document.getElementById("btn-change");
  btn.addEventListener("click", () => changeBackgroundColor());
});

function changeBackgroundColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  var sectionElement = document.querySelector("section");
  sectionElement.classList.toggle("transition-bg");
  sectionElement.style.backgroundColor = color;
}
