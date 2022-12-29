const button = document.getElementById("btnPercent");
const percentBar = document.getElementById("percentBar");
const percentText = document.getElementById("percentText");
let percent = 10;

button?.addEventListener("click", function () {
  if (percent < 100) {
    percent += 10;
  }
  percentBar.style.width = `${percent}%`;
  percentText.innerHTML = `${percent}%`;

  console.log(percent);
});
