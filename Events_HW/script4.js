const lights = document.querySelectorAll(".light");
let current = 0;

document.getElementById("next").addEventListener("click", () => {
  lights[current].classList.remove("red", "yellow", "green");
  current = (current + 1) % 3;
  lights[current].classList.add(["red", "yellow", "green"][current]);
});