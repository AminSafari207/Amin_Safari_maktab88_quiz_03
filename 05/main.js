const capital = { London: "England", Tehran: "Iran", Tokyo: "Japan" };

const selectiveButtons = document.getElementsByClassName("btn-check");

const buildInfo = (cityName) => {
  const infoDiv = document.getElementById("info");
  const parentDiv = document.createElement("div");
  const header = document.createElement("h3");
  const info = document.createElement("p");

  parentDiv.id = "parentDiv";

  header.style.marginBottom = "10px";
  header.style.textAlign = "left";
  header.innerHTML = cityName;

  info.style.textAlign = "left";
  info.innerHTML = `${cityName} is the capital city of ${capital[cityName]}.`;

  parentDiv.appendChild(header);
  parentDiv.appendChild(info);
  infoDiv.appendChild(parentDiv);
};

Array.from(selectiveButtons).forEach((b) => {
  b.addEventListener("click", function () {
    console.log(b.id);
    document.getElementById("parentDiv")?.remove();
    buildInfo(b.id);
  });
});

// Initial Info
buildInfo("London");
