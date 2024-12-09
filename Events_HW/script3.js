const field = document.querySelector(".field");
const ball = document.querySelector(".ball");

field.addEventListener("click", (e) => {
  const rect = field.getBoundingClientRect(); // DOMRect object about the size of element and its position
  const ballDiameter = ball.offsetWidth;
  let x = e.clientX - rect.left - ballDiameter / 2;
  let y = e.clientY - rect.top - ballDiameter / 2;

  x = Math.max(0, Math.min(x, field.clientWidth - ballDiameter));
  y = Math.max(0, Math.min(y, field.clientHeight - ballDiameter));

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
});