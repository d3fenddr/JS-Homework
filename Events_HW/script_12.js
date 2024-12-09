// 1

const input = document.getElementById("username");
input.addEventListener("input", (e) => {
  input.value = input.value.replace(/\d/g, "");
});

// 2

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
